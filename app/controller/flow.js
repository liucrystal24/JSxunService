'use strict';

const Controller = require('egg').Controller;

class FlowController extends Controller {
  async flowRead() {
    const ctx = this.ctx;
    const flowInfo = await ctx.service.flow.flowRead();
    const infolength = flowInfo.length;
    if (infolength === 0) {
      ctx.body = {
        code: 0,
      };
    } else {
      ctx.body = {
        code: 1,
        info: flowInfo,
      };
    }
  }

  async flowImage() {
    const ctx = this.ctx;
    const request = ctx.request.body;
    const ID = request.ID;
    // console.log(ID);
    const imgInfo = await ctx.service.flow.flowImage(
      ID
    );
    if (imgInfo == null) {
      ctx.body = {
        // 失败
        code: 0,
      };
    } else {
      ctx.body = imgInfo;
    }
  }

}

module.exports = FlowController;
