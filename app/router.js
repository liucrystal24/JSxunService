'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // root

  router.get('/api/login', controller.root.login);
  router.get('/api/npRoot', controller.root.npRoot);
  router.get('/api/tdRoot', controller.root.tdRoot);
  router.get('/api/rootRead', controller.root.rootRead);
  router.post('/api/rootUpdate', controller.root.rootUpdate);

  // 设备
  router.get('/api/deviceRead', controller.device.deviceRead);
  router.post('/api/deviceAdd', controller.device.deviceAdd);

  // 桥梁

  router.post('/api/bridgeAdd', controller.bridge.bridgeAdd);

  router.post('/api/bridgeUpdate', controller.bridge.bridgeUpdate);

  router.get('/api/bridgeDelete', controller.bridge.bridgeDelete);

  router.get('/api/bridgeRead', controller.bridge.bridgeRead);

  router.get('/api/bridgeState1', controller.bridge.bridgeState1);

  router.get('/api/bridgeState0', controller.bridge.bridgeState0);

  router.get('/api/bridgeSearchID', controller.bridge.bridgeSearchID);

  // 流量监测

  router.get('/api/flowRead', controller.flow.flowRead);

  router.post('/api/flowImage', controller.flow.flowImage);

  router.post('/api/flowUpload', controller.flow.flowUpload);

  router.get('/api/waterflowSearch', controller.flow.waterflowSearch);

  // 断面

  router.get('/api/duanRead', controller.duan.duanRead);
  router.get('/api/duanSearch', controller.duan.duanSearch);
  router.post('/api/duanUpload', controller.duan.duanUpload);


  // task

  router.post('/api/taskAdd', controller.task.taskAdd);
  router.get('/api/taskRead', controller.task.taskRead);
  router.post('/api/taskUpdate', controller.task.taskUpdate);
  router.get('/api/taskSearch', controller.task.taskSearch);

};

