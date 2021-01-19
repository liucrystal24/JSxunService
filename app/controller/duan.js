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
  async SectionNumRead() {
    const ctx = this.ctx;
    const SectionNumInfo = await ctx.service.duan.SectionNumRead();
    const infolength = SectionNumInfo.length;
    if (infolength === 0) {
      ctx.body = {
        code: 0,
      };
    } else {
      ctx.body = {
        code: 1,
        info: SectionNumInfo,
      };
    }
  }

  async SectionDepth() {
    const ctx = this.ctx;
    const startdate = ctx.query.startdate;
    const enddate = ctx.query.enddate;
    const sectionNum = ctx.query.sectionNum;
    const Info = await ctx.service.duan.SectionDepth(
      startdate,
      enddate,
      sectionNum
    );
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
  
  async SectionFlow() {
    const ctx = this.ctx;
    const startdate = ctx.query.startdate;
    const enddate = ctx.query.enddate;
    const sectionNum = ctx.query.sectionNum;
    const Info = await ctx.service.duan.SectionFlow(
      startdate,
      enddate,
      sectionNum
    );
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
  async duanUpload() {
    const ctx = this.ctx;
    const request = ctx.request.body;
    const FlowDirection = request.FlowDirection;
    const LeftDistance = request.LeftDistance;
    const RightDistance = request.RightDistance;
    const TotalQ = request.TotalQ;
    const TotalArea = request.TotalArea;
    const QperArea = request.QperArea;
    const MeanWaterDepth = request.MeanWaterDepth;
    const Width = request.Width;
    const StartTime = request.StartTime;
    const EndTime = request.EndTime;
    const Info = await ctx.service.duan.duanUpload(
      FlowDirection,
      LeftDistance,
      RightDistance,
      TotalQ,
      TotalArea,
      QperArea,
      MeanWaterDepth,
      Width,
      StartTime,
      EndTime
    );
    // console.log(fileUploadInfo.result.affectedRows)
    if (Info.affectedRows === 0) {
      ctx.body = {
        // 失败
        code: 0,
      };
    } else {
      ctx.body = {
        code: 1,
      };
    }
  }
}

module.exports = DuanController;
