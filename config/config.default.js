/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  exports.cluster = {
    listen:{
      port:7001,
      hostname:'0.0.0.0',
    }
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1586787139970_4875';

  // add your middleware config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.news = {
    // pageSize: 5,
    serverUrl: 'http://127.0.0.1:7001/list',
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '47.98.47.248',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'ywtsoft',
      // 数据库名
      database: 'jsxun',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf: {
      enable: false,
      // queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
      // bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
