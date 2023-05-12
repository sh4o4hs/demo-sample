import app from 'entity/app';
import * as png from 'scene/png';


let isCreate = false;
let sceneSounds = null;
let scene = null;

let elephant1 = null;
let elephant2 = null;

let click1 = null;
let click2 = null;

export async function create (game) {
  let sceneManager = app.nuts.scene.sceneManager;
  let lib = await import('entity/main');
  let Main = lib.default;
  let main = Main.getSingleton();
  let center = main.getCenter();

  // 是否需要建立
  if (!isCreate) {

    // 讀取資源檔
    let vendor = await import('src/vendor');

    let res;
    if (app.setting.useAvif) {
      res = await vendor.get('v2load');
    } else {
      res = await vendor.get('v1load');
    }

    let config = {
      game,
      infoList: [
        { eventName: 'sound',   obj: res}
      ]
    };

    console.log('[讀取資源] 音效');
    sceneSounds = await sceneManager.createScene(config);
    console.log('[讀取資源] 完成');
    console.log(sceneSounds);

    // 設定音效物件
    center.sounds = sceneSounds.sounds;

    config = {
      game,
      infoList: [
        { eventName: 'texture',   obj: res}
      ]
    };

    console.log('[讀取資源] 圖檔');
    scene = await sceneManager.createScene(config);
    console.log('[讀取資源] 完成');
    console.log(scene);
    isCreate = true;

    // globalThis.Howler.autoSuspend = false;

    await main.reload(scene);
  }

  // const video = document.createElement('video');
  // video.src = app.baseURL + 'res/video/soccer1.webm';
  // video.controls = true;
  // video.muted = false;

  // console.log(video);

  // video.onplay = (/* event */) => {
  //   // console.log('播放');
  // };

  // video.onended = (/* event */) => {
  //   // console.log('結束');
  //   video.play();
  // };

  // const videoMask = document.createElement('video');
  // videoMask.src = '	https://simpl.info/videoalpha/video/dancer1.webm';
  // videoMask.controls = true;
  // videoMask.muted = false;


  // videoMask.onplay = (/* event */) => {
  // };

  // videoMask.onended = (/* event */) => {
  //   video.play();
  // };


  // 建立
  let url;
  url = app.baseURL + 'res/video/kingBaccarata001_1.png';
  let image1 = await png.createImage(url);

  url = app.baseURL + 'res/video/clock.png';
  let image2 = await png.createImage(url);

  if (!elephant1) {
    elephant1 = await png.createPlayer(image1);
  }

  if (!elephant2) {
    elephant2 = await png.createPlayer(image1);
  }

  if (!click1) {
    click1 = await png.createPlayer(image1);
  }

  if (!click2) {
    click2 = await png.createPlayer(image1);
  }

  // 顯示
  click1.x = 10;
  click1.y = 400;
  game.layer.overlay.addChild(click1);

  click2.x = 200;
  click2.y = 400;
  click2.speed = 0.0005;
  game.layer.overlay.addChild(click2);

  elephant1.x = 10;
  elephant1.speed = 0.005;
  game.layer.overlay.addChild(elephant1);

  elephant2.x = 350;
  elephant2.speed = 0.001;
  game.layer.overlay.addChild(elephant2);


  // 播放
  async function playClick1 () {
    console.log('[click1] start');
    for (let i = 0; i < 5; i++) {
      await click1.play();
    }
    console.log('[click1] end');
  }
  async function playClick2 () {
    console.log('[click2] start');
    for (let i = 0; i < 10; i++) {
      await click2.play();
    }
    console.log('[click2] end');
  }
  console.log('[playClick1] start');
  playClick1();
  console.log('[playClick1] end');

  console.log('[playClick2] start');
  await playClick2();
  console.log('[playClick2] end');


  console.log('[play] start elephant1');
  elephant1.play(5);
  await game.idle(1.0);
  await elephant1.pause();
  console.log('[play] end elephant1');

  console.log('[play] start elephant2');
  await elephant2.play();
  console.log('[play] end elephant2');

  console.log('[play] start elephant1');
  await elephant1.play();
  console.log('[play] end elephant1');

  console.log('[play] start elephant2');
  elephant2.speed = 0.002;
  await elephant2.play();
  console.log('[play] end elephant2');

  // 停止
  elephant1.stop();
  elephant2.stop();

  // teVideo = PIXI.Texture.from(url);

  // const teMask = PIXI.Texture.from(videoMask);
  // let mask = new PIXI.Sprite(teMask);


  //----------------------------------------
  // 播放背景音樂
  // let sound = center.sounds.demo;
  // if (sound && sound.music && sound.music.play) {
  //   sound.music.volume(0.2);
  //   sound.music.play();
  // }


}
