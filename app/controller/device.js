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

  async bridgeDelete() {
    const ctx = this.ctx;
    const bridgeID = ctx.query.bridgeID;
    const bridgedelInfo = await ctx.service.bridge.bridgeDelete(bridgeID);
    if (bridgedelInfo.affectedRows === 0) {
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
  async bridgeUpdate() {
    const ctx = this.ctx;
    const request = ctx.request.body;
    const bridgeID = request.bridgeID;
    const bridgeName = request.bridgeName;
    const lon = request.lon;
    const lat = request.lat;
    const bridgedelInfo = await ctx.service.bridge.bridgeUpdate(
      bridgeID,
      bridgeName,
      lon,
      lat
    );
    if (bridgedelInfo.affectedRows === 0) {
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

  async bridgeState1() {
    const ctx = this.ctx;
    const bridgeID = ctx.query.bridgeID;
    const bridgeStateInfo = await ctx.service.bridge.bridgeState1(bridgeID);
    if (bridgeStateInfo.affectedRows === 0) {
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

  async bridgeState0() {
    const ctx = this.ctx;
    const bridgeID = ctx.query.bridgeID;
    const bridgeStateInfo = await ctx.service.bridge.bridgeState0(bridgeID);
    if (bridgeStateInfo.affectedRows === 0) {
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
  async bridgeSearchID() {
    const ctx = this.ctx;
    const bridgeName = ctx.query.bridgeName;
    const bridgeIDInfo = await ctx.service.bridge.bridgeSearchID(bridgeName);
    console.log(bridgeIDInfo);
    const bridgeLength = bridgeIDInfo.length;
    if (bridgeLength === 0) {
      ctx.body = {
        // 失败
        code: 0,
      };
    } else {
      ctx.body = {
        code: 1,
        info: bridgeIDInfo,
      };
    }
  }
}

module.exports = DeviceController;
