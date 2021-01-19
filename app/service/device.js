"use strict";

const Service = require("egg").Service;

class DeviceService extends Service {
  async deviceRead() {
    const result = await this.app.mysql.query("SELECT * FROM `device_list`");
    for (let i = 0; i < result.length; i++) {
      if(result[i].overtime!=null){
        result[i].overtime = this.formatDate(result[i].overtime);
      }
    }
    return result;
  }

  // 用户和设备添加：在同一张表，故方法一样
  async deviceAdd(
    deviceID,
    deviceName,
    deviceType,
    deviceArea,
    userID,
    userName,
    overtime
  ) {
    // 需要检查ID
    if(overtime != null){
      overtime = this.format(new Date(overtime));
    }
    const result = await this.app.mysql.insert("device_list", {
      deviceID,
      deviceName,
      deviceType,
      deviceArea,
      userID,
      userName,
      overtime,
    });
    return { result };
  }

  async overtimeUpdate(deviceID, overtime) {
    const options = {
      where: {
        deviceID,
      },
    };
    overtime = this.formatDate(new Date(overtime));
    const result = await this.app.mysql.update('device_list', {
      deviceID,
      overtime
    }, options);
    return { result };
  }

  async deviceDelete(deviceID) {
    const result = await this.app.mysql.delete("device_list", {
      deviceID,
    });
    return { result };
  }


  async userDelete(userID) {
    const result = await this.app.mysql.delete("device_list", {
      userID,
    });
    return { result };
  }
  formatDate(date){
    const year = date.getFullYear();
    const month1 = date.getMonth() + 1;
    const month = month1 < 10 ? "0" + month1 : month1;
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return (
      year + "-" + month + "-" + day
    );
  }
  format(date) {
    const year = date.getFullYear();
    const month1 = date.getMonth() + 1;
    const month = month1 < 10 ? "0" + month1 : month1;
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

    const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minute =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

    const second =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    return (
      year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second
    );
  }
}

module.exports = DeviceService;
