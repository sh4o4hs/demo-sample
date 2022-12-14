/* ************************************************************************
 *
 *   Copyright:
 *
 *   License:
 *
 *   Authors:
 *
 ************************************************************************ */

import app from 'entity/app';
import * as strings from 'language/strings';

/**
 * 事件用
 */
let eventList = null;


export async function getLogo () {
  let game = app.game;
  let setting = app.setting;
  let obj = await game.getProject('video/photos');
  let pathname = obj.pathname;
  let filename = await obj.lib.getLogo(setting.agent);
  filename = `${pathname}/${filename}`;
  console.log(filename);
}

/**
 * 初始化事件 (接收大廳傳送的命令用)
 * @returns {Object} 傳回物件事件
 */
export async function init (config) {

  // 初始化
  let baseURL = config.baseURL || '.';
  let langID = config.langID;

  app.gamecard = config.gamecard;
  app.isChild = config.isChild;
  app.game = config.game;
  app.nuts = config.nuts;
  app.setting = config.setting;

  app.baseURL = baseURL;
  app.langID = langID;


  if (eventList) {
    return eventList;
  }
  console.log('scene init');
  console.log(config);

  eventList = {

    /**
     * 建立場景
     * @param conf config
     */
    async create (conf)  {
      console.log(conf);
      let game = app.game;
      let loadingEvent = game.scene.loadingEvent;

      // 建立場景
      let scene = await import('scene/main');
      let nuts = app.nuts;

      nuts.scene.sceneManager.setBaseURL(baseURL);
      nuts.scene.sceneManager.setEvent(loadingEvent);

      await scene.create(game, loadingEvent);
      nuts.scene.sceneManager.setEvent(null);
    },

    /**
     * 開始更新畫面
     */
    play (conf) {
      console.log(conf.game.scene.info.id + ' scene play: from ' + conf.from);
      app.from = conf.from;

    },

    /**
     * 暫停更新畫面
     */
    pause (conf) {
      console.log(conf.game.scene.info.id + ' scene pause : from ' + conf.from);
    },

    /**
     * 進入場景
     */
    async enter (conf) {
      console.log('scene enter ');

      // todo:game 收到玩家進入遊戲
      let game = conf.game;

      // 背景讀取資源
      let scene = await import('scene/load');
      scene.create(game);

      // 初始化視訊
      app.tableInfo = {
        tableKey: 'a1'
      };
      let video = await import('scene/video');

      let testID = 'BaccaratSeatPC';

      // let testID = 'BGBaccarat';
      await video.init({
        Texture: PIXI.Texture,
        game,
        tableKey: app.tableInfo.tableKey,
        id: testID
      });

      // 初始化網路
      let net = await import('net/network');
      await net.init(conf);

      // 傳送網路命令
      let cmd = await import('net/command/create');
      cmd.send();


      getLogo().then(texture => {
        let sprite = new PIXI.Sprite(texture);
        sprite.x = 100;
        sprite.y = 100;
        sprite.anchor.x = 0.5;
        sprite.anchor.y = 0.5;
        game.layer.foreground.addChild(sprite);
      });

      game.disconnect = () => {
        console.log('!!!! game.disconnect !!!!');
      };
    },

    /**
     * 離開場景
     */
    async leave (conf) {
      console.log('scene leave');
      let scene = conf.game.scene;
      if (scene && scene.localEvent) {
        scene.localEvent.pause(conf);
        scene.localEvent.hide();
      }
    },

    /**
     * 操作中
     */
    focus () {
      console.log('scene focus');
    },

    /**
     * 未操作
     */
    blur () {
      console.log('scene blur');
    },

    /**
     * 鎖定畫面比例
     * @param state {boolean} 是否鎖定畫面比例
     */
    lock (state) {
      console.log('lock :' + state);
    },

    /**
     * 全螢幕事件
     * @param state
     */
    fullscreen (state) {
      console.log(state);
    },

    /**
     * 尺寸改變事件
     * @param state
     */
    resize (/* state */) {
      // console.log(state);
    },

    /**
     * 音樂事件
     * @param state
     */
    music (state) {
      console.info('音樂事件 : ' + state.isMute);
    },

    /**
     *  音效事件
     * @param state
     */
    sound (state) {
      console.info('音效事件 : ' + state.isMute);
    }
  };

  // 設定多語
  strings.setLanguage(app.langID);

  // 設定資源
  let vendor = await import('src/vendor');
  vendor.setLang(langID);
  vendor.setBaseURL(baseURL);

  return eventList;
}

