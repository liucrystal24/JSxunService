'use strict';

const Service = require('egg').Service;

class DeviceService extends Service {

  async deviceRead() {
    const result = await this.app.mysql.query('SELECT * FROM `device_list`');
    return result;
  }

  // 用户和设备添加：在同一张表，故方法一样
  async deviceAdd(deviceID, deviceName, deviceType, userID,
    userName) {
    // 需要检查ID
    const result = await this.app.mysql.insert('device_list', {
      deviceID,
      deviceName,
      deviceType,
      userID,
      userName
    });
    return { result };
  }

  async deviceDelete(deviceID) {
    const result = await this.app.mysql.delete('device_list', {
      deviceID,
    });
    return { result };
  }
  async userDelete(userID) {
    const result = await this.app.mysql.delete('device_list', {
      userID,
    });
    return { result };
  }
}


module.exports = DeviceService;
