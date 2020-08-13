"use strict";

const Controller = require("egg").Controller;

class DuanController extends Controller {
  async duanRead() {
    const ctx = this.ctx;
    const duanInfo = await ctx.service.duan.duanRead();
    const infolength = duanInfo.length;
    if (infolength === 0) {
      ctx.body = {
        code: 0,
      };
    } else {
      ctx.body = {
        code: 1,
        info: duanInfo,
      };
    }
  }
  async duanSearch() {
    const ctx = this.ctx;
    const startdate = ctx.query.startdate;
    const enddate = ctx.query.enddate;
    const Info = await ctx.service.duan.duanSearch(startdate, enddate);
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
}

module.exports = DuanController;
