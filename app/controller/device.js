"use strict";

const Controller = require("egg").Controller;

class DeviceController extends Controller {
  async deviceRead() {
    const ctx = this.ctx;
    const Info = await ctx.service.device.deviceRead();
    const infolength = Info.length;
    if (infolength === 0) {
      ctx.body = {
        code: 0,
      };
    } else {
      ctx.body = {
        code: 1,
        info: Info,
      };
    }
  }

  async deviceAdd() {
    const ctx = this.ctx;
    const request = ctx.request.body;
    const deviceID = request.deviceID;
    const deviceName = request.deviceName;
    const deviceType = request.deviceType;
    const userID = request.userID;
    const userName = request.userName;
    console.log(request);
    const Info = await ctx.service.device.deviceAdd(
      deviceID,
      deviceName,
      deviceType,
      userID,
      userName
    );
    if (Info.affectedRows === 0) {
      ctx.body = {
        // 失败
        code: 0,
      };
    } else {
      ctx.body = {
        code: 1,
        info: ctx.query,
      };
    }
  }
  
}

module.exports = DeviceController;
