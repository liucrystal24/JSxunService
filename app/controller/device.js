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
    const deviceArea = request.deviceArea;
    const overtime = request.overtime;
    const userID = request.userID;
    const userName = request.userName;
    console.log(request);
    const Info = await ctx.service.device.deviceAdd(
      deviceID,
      deviceName,
      deviceType,
      deviceArea,
      userID,
      userName,
      overtime
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


  async overtimeUpdate() {
    const ctx = this.ctx;
    const request = ctx.request.body;
    const deviceID = request.deviceID;
    const overtime = request.overtime;
    const info = await ctx.service.device.overtimeUpdate(
      deviceID,
      overtime
    );
    if (info.affectedRows === 0) {
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

  async deviceDelete() {
    const ctx = this.ctx;
    const deviceID = ctx.query.deviceID;
    const Info = await ctx.service.device.deviceDelete(deviceID);
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
  async userDelete() {
    const ctx = this.ctx;
    const userID = ctx.query.userID;
    const Info = await ctx.service.device.userDelete(userID);
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
