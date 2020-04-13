'use strict';

const Controller = require('egg').Controller;

class BridgeController extends Controller {
  async bridgeAdd() {
    const ctx = this.ctx;
    const request = ctx.request.body;
    const bridgeID = request.bridgeID;
    const bridgeName = request.bridgeName;
    const lon = request.lon;
    const lat = request.lat;
    const bridgeaddInfo = await ctx.service.bridge.bridgeAdd(
      bridgeID,
      bridgeName,
      lon,
      lat
    );
    // const infolength = bridgeaddInfo.length;
    if (bridgeaddInfo.affectedRows === 0) {
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
    const bridgedelInfo = await ctx.service.bridge.bridgeDelete(
      bridgeID
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

  async bridgeRead() {
    const ctx = this.ctx;
    const bridgeInfo = await ctx.service.bridge.bridgeRead();
    const infolength = bridgeInfo.length;
    if (infolength === 0) {
      ctx.body = {
        code: 0,
      };
    } else {
      ctx.body = {
        code: 1,
        info: bridgeInfo,
      };
    }
  }

  async bridgeState1() {
    const ctx = this.ctx;
    const bridgeID = ctx.query.bridgeID;
    const bridgeStateInfo = await ctx.service.bridge.bridgeState1(
      bridgeID
    );
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
    const bridgeStateInfo = await ctx.service.bridge.bridgeState0(
      bridgeID
    );
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
}

module.exports = BridgeController;
