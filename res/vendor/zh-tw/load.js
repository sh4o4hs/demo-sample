System.register([], function (exports) {
  'use strict';
  return {
    execute: function () {

      var data = { sounds:{ demo:[ { objName:"click",
              config:{ src:[ "data/main/sound/6adb0cf12169dc7f.wav",
                  "data/main/sound/3aa6966f71af17ca.mp3",
                  "data/main/sound/46c31e28ecc000d5.ogg" ],
                loop:false } },
            { objName:"winBonus",
              config:{ src:[ "data/main/sound/b04575fe67b1ce35.wav",
                  "data/main/sound/8e10a184530b5ee2.mp3",
                  "data/main/sound/9330d6a723dae150.ogg" ],
                loop:false } },
            { objName:"countDown",
              config:{ src:[ "data/main/sound/14e2472fd975afac.wav",
                  "data/main/sound/e25c1c76dcc1ab4d.mp3",
                  "data/main/sound/5627cfb4a31f7648.ogg" ] },
              loop:false },
            { objName:"music",
              config:{ src:[ "data/main/sound/152910ad6c641833.wav" ],
                loop:true } } ] },
        images:{ demo:{ ring:[ "data/main/loading/5194d92e22d8f036.png",
              "data/main/loading/18ce551957f56e22.png",
              "data/main/loading/ff13b3ff9fd7990b.png",
              "data/main/loading/5be33c170a708391.png",
              "data/main/loading/20898c6ca3eed211.png",
              "data/main/loading/6a8620a546ad4363.png",
              "data/main/loading/1aa8deaac39b5da0.png",
              "data/main/loading/535839ce0bed8517.png",
              "data/main/loading/4474841b72c56deb.png",
              "data/main/loading/40ee4fadb2a8f3be.png",
              "data/main/loading/dc2dc25760fa8491.png",
              "data/main/loading/c3bfd5f259340831.png" ],
            button:{ auto:{ enter:"data/main/button/auto/8f2907689ccc6f75.png",
                leave:"data/main/button/auto/29e5d6f24a45c124.png",
                press:"data/main/button/auto/fa4f2de2fb814f5c.png" },
              autoLight:{ enter:"data/main/button/auto/fa4f2de2fb814f5c.png",
                leave:"data/main/button/auto/fa4f2de2fb814f5c.png",
                press:"data/main/button/auto/8f2907689ccc6f75.png" },
              bet:{ enter:"data/main/button/bet/2ff78c3691df51d5.png",
                leave:"data/main/button/bet/1d80e78cffe77850.png",
                press:"data/main/button/bet/50b2ccc5a9a2cda2.png" },
              leave:{ enter:"data/main/button/leave/3bb32cc432aec70c.png",
                leave:"data/main/button/leave/ea824c85de726448.png",
                press:"data/main/button/leave/4a511febb44a506c.png" } } },
          ui:{ pageInfo:{ a:"data/main/ui/lang/zh-tw/9e11a5e8f37c349f.png",
              b:"data/main/ui/lang/zh-tw/da4d992e3b5d8513.png",
              c:"data/main/ui/lang/zh-tw/d5717fa0cd2ca864.png",
              d:"data/main/ui/lang/zh-tw/cdd7db659b523eef.png",
              e:"data/main/ui/lang/zh-tw/ac230694df049cfa.png" },
            pageInfoText:{ a:"data/main/ui/lang/zh-tw/92177e78cce8b937.png",
              b:"data/main/ui/lang/zh-tw/fc60bc2035dee8a4.png" } } },
        assets:{ "data/main/asset/0dade339a34073dc.json":{ frames:{ numBW0:{ frame:{ x:0,
                  y:0,
                  w:72,
                  h:116 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:72,
                  h:116 },
                sourceSize:{ w:72,
                  h:116 } },
              numBW1:{ frame:{ x:72,
                  y:0,
                  w:72,
                  h:116 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:72,
                  h:116 },
                sourceSize:{ w:72,
                  h:116 } },
              numBW2:{ frame:{ x:145,
                  y:0,
                  w:72,
                  h:116 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:72,
                  h:116 },
                sourceSize:{ w:72,
                  h:116 } },
              numBW3:{ frame:{ x:218,
                  y:0,
                  w:72,
                  h:116 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:72,
                  h:116 },
                sourceSize:{ w:72,
                  h:116 } },
              numBW4:{ frame:{ x:291,
                  y:0,
                  w:72,
                  h:116 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:72,
                  h:116 },
                sourceSize:{ w:72,
                  h:116 } },
              numBW5:{ frame:{ x:364,
                  y:0,
                  w:72,
                  h:116 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:72,
                  h:116 },
                sourceSize:{ w:72,
                  h:116 } },
              numBW6:{ frame:{ x:437,
                  y:0,
                  w:72,
                  h:116 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:72,
                  h:116 },
                sourceSize:{ w:72,
                  h:116 } },
              numBW7:{ frame:{ x:510,
                  y:0,
                  w:72,
                  h:116 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:72,
                  h:116 },
                sourceSize:{ w:72,
                  h:116 } },
              numBW8:{ frame:{ x:583,
                  y:0,
                  w:72,
                  h:116 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:72,
                  h:116 },
                sourceSize:{ w:72,
                  h:116 } },
              numBW9:{ frame:{ x:656,
                  y:0,
                  w:72,
                  h:116 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:72,
                  h:116 },
                sourceSize:{ w:72,
                  h:116 } },
              "numBW,":{ frame:{ x:729,
                  y:0,
                  w:36,
                  h:116 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:36,
                  h:116 },
                sourceSize:{ w:36,
                  h:116 } },
              "numBW.":{ frame:{ x:766,
                  y:0,
                  w:36,
                  h:116 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:36,
                  h:116 },
                sourceSize:{ w:36,
                  h:116 } } },
            meta:{ image:"92bdf273030ff894.png",
              format:"RGBA8888",
              size:{ w:820,
                h:116 },
              scale:"1" } },
          "data/main/asset/14fe1ef910628b2c.json":{ frames:{ "NumMPurple.":{ frame:{ x:672,
                  y:0,
                  w:32,
                  h:84 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:32,
                  h:84 },
                sourceSize:{ w:32,
                  h:84 } },
              "NumMPurple,":{ frame:{ x:639,
                  y:0,
                  w:32,
                  h:84 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:32,
                  h:84 },
                sourceSize:{ w:32,
                  h:84 } },
              NumMPurple0:{ frame:{ x:0,
                  y:0,
                  w:63,
                  h:84 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:63,
                  h:84 },
                sourceSize:{ w:63,
                  h:84 } },
              NumMPurple1:{ frame:{ x:63,
                  y:0,
                  w:63,
                  h:84 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:63,
                  h:84 },
                sourceSize:{ w:63,
                  h:84 } },
              NumMPurple2:{ frame:{ x:127,
                  y:0,
                  w:63,
                  h:84 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:63,
                  h:84 },
                sourceSize:{ w:63,
                  h:84 } },
              NumMPurple3:{ frame:{ x:191,
                  y:0,
                  w:63,
                  h:84 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:63,
                  h:84 },
                sourceSize:{ w:63,
                  h:84 } },
              NumMPurple4:{ frame:{ x:255,
                  y:0,
                  w:63,
                  h:84 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:63,
                  h:84 },
                sourceSize:{ w:63,
                  h:84 } },
              NumMPurple5:{ frame:{ x:319,
                  y:0,
                  w:63,
                  h:84 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:63,
                  h:84 },
                sourceSize:{ w:63,
                  h:84 } },
              NumMPurple6:{ frame:{ x:383,
                  y:0,
                  w:63,
                  h:84 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:63,
                  h:84 },
                sourceSize:{ w:63,
                  h:84 } },
              NumMPurple7:{ frame:{ x:447,
                  y:0,
                  w:63,
                  h:84 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:63,
                  h:84 },
                sourceSize:{ w:63,
                  h:84 } },
              NumMPurple8:{ frame:{ x:511,
                  y:0,
                  w:63,
                  h:84 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:63,
                  h:84 },
                sourceSize:{ w:63,
                  h:84 } },
              NumMPurple9:{ frame:{ x:575,
                  y:0,
                  w:63,
                  h:84 },
                rotated:false,
                trimmed:false,
                spriteSourceSize:{ x:0,
                  y:0,
                  w:63,
                  h:84 },
                sourceSize:{ w:63,
                  h:84 } } },
            meta:{ image:"5ba3857c99871ce6.png",
              format:"RGBA8888",
              size:{ w:720,
                h:84 },
              scale:"1" } } } };

      exports('default', data);

    }
  };
});
