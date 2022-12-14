# demo sample 說明

## 調整設定

### 專案路徑

    project/群組/專案/

### 步驟 1 修改資源設定

- res.config.yml  

原本內容

````yml
# 最佳化用
vendor:
  custom:
    - en-us
    - zh-tw
    - zh-cn
    # - vi-vn
    # - th-th

  source: src/resource.js
  resource: res/vendor.yml
  output: res/vendor.js
````

改為 (根據原本 resource.js 內容修改)

````yml
# 最佳化用
vendor:
  sceneList:
    - v1main # 主畫面版本一
    - v2main # 主畫面版本二
    - sub    # 子畫面
    - v1load # 背景讀取版本一 
    - v2load # 背景讀取版本二 
    - v1info # 說明版本一
    - v2info # 說明版本二
  langList:
    - en-us
    - zh-tw
    - zh-cn
    # - vi-vn
    # - th-th

  source: src/makeres/resource.js
  resource: res/vendor.yml
  output: res/vendor.js
````


- src/resource.js 移動到 src/makeres/resource.js  

原本內容

````js
import * as main from 'makeres/main';
import * as load from 'makeres/load';

export {
  main,
  load
};
````

改為
````js
export * from 'res';
````

- 調整建立資源檔命令 grunt makeres

新增子命令,單獨處理指定的場景  
grunt makeres:<語言代號>:<場景代號>  
例如

````bash
處理主要場景
grunt makeres:en-us:main

處理背景讀取 (圖檔與音效檔)
grunt makeres:en-us:load
````

### 步驟 2 修改程式設定

- system.set.yml  

改為
````yml
# config
config:
  paths:
    nuts: /dependence/nuts/nuts.2.9.0.js
  map:
    # stats: depend:stats/stats.min.0.17.0.js
    # loader: depend:loader/resource-loader.min.3.0.1.js
    mithril: depend:mithril/mithril.min.2.2.2.js
    tweenjs: depend:createjs/tweenjs.min.1.0.2.js
    pixi: depend:pixi/pixi.min.6.5.8.js
    pixi-spine: depend:pixi/pixi-spine.2.0.5.js

  externals:
    # - stats
    # - nuts
    # - loader
    - mithril
    # - js-yaml
    - tweenjs
    - mustache
    - howler
    - io
    - pixi
    - pixi-spine
    - pixi-particles
    - dragonBones
    - dragonBonesPixi

````

- src/程式碼

下面程式庫打註解

````js
// import m from 'mithril';
// import * as Loader from 'resource-loader';
// import Stats from 'stats';
````

.eslintrc.yml  

新增一個條件

````yml
globals:
  m: true
````