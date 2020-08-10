'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 主页
  router.get('/', controller.home.index);


  // 桥梁
  router.post('/api/bridgeAdd', controller.bridge.bridgeAdd);

  router.post('/api/bridgeUpdate', controller.bridge.bridgeUpdate);

  router.get('/api/bridgeDelete', controller.bridge.bridgeDelete);

  router.get('/api/bridgeRead', controller.bridge.bridgeRead);

  router.get('/api/bridgeState1', controller.bridge.bridgeState1);

  router.get('/api/bridgeState0', controller.bridge.bridgeState0);

  // 流量监测
  router.get('/api/flowRead', controller.flow.flowRead);
  // 流计表图片
  router.post('/api/flowImage', controller.flow.flowImage);


};
