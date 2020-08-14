"use strict";

const Controller = require("egg").Controller;

class TaskController extends Controller {
  async taskAdd() {
    const ctx = this.ctx;
    const request = ctx.request.body;
    const publishTime = request.publishTime;
    const DoTime = request.DoTime;
    const taskState = request.taskState;
    const publishAddress = request.publishAddress;
    const deviceID = request.deviceID;
    const deviceType = request.deviceType;
    const mandoID = request.mandoID;
    const mandoName = request.mandoName;
    const manPublishName = request.manPublishName;
    const publishTips = request.publishTips;
    const Info = await ctx.service.task.taskAdd(
      publishTime,
      DoTime,
      taskState,
      publishAddress,
      deviceID,
      deviceType,
      mandoID,
      mandoName,
      manPublishName,
      publishTips
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

  async taskRead() {
    const ctx = this.ctx;
    const Info = await ctx.service.task.taskRead();
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

  async taskUpdate() {
    const ctx = this.ctx;
    const request = ctx.request.body;
    const ID = request.ID;
    const taskState = request.taskState;
    const Info = await ctx.service.task.taskUpdate(ID, taskState);
    if (Info.affectedRows === 0) {
      ctx.body = {
        code: 0,
      };
    } else {
      ctx.body = {
        code: 1,
      };
    }
  }
  async duanSearch() {
    const ctx = this.ctx;
    const startdate = ctx.query.startdate;
    const enddate = ctx.query.enddate;
    const Info = await ctx.service.task.duanSearch(startdate, enddate);
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

module.exports = TaskController;
