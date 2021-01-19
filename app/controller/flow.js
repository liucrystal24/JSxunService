"use strict";

const Controller = require("egg").Controller;

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
    const imgInfo = await ctx.service.flow.flowImage(ID);
    if (imgInfo == null) {
      ctx.body = {
        // 失败
        code: 0,
      };
    } else {
      // ctx.body = imgInfo;
      ctx.body = imgInfo;
    }
  }
  async flowUpload() {
    const ctx = this.ctx;
    const request = ctx.request.body;
    const bridgeID = request.bridgeID;
    const flowData = request.flowData;
    const flowAvg = request.flowAvg;
    const deviceType = request.deviceType;
    const testTime = request.testTime;
    const fileUpload = request.fileUpload;
    const lon = request.lon;
    const lat = request.lat;
    const fileUploadInfo = await ctx.service.flow.flowUpload(
      bridgeID,
      flowData,
      flowAvg,
      deviceType,
      testTime,
      fileUpload,
      lon,
      lat
    );
    // console.log(fileUploadInfo.result.affectedRows)
    if (fileUploadInfo.result.affectedRows === 0) {
      ctx.body = {
        // 失败
        code: 0,
      };
    } else {
      ctx.body = {
        code: 1,
        info: {
          bridgeID: fileUploadInfo.bridgeID,
          flowData: fileUploadInfo.flowData,
          flowAvg: fileUploadInfo.flowAvg,
          deviceType: fileUploadInfo.deviceType,
          testTime: fileUploadInfo.testTime,
          lon: fileUploadInfo.lon,
          lat: fileUploadInfo.lat,
        },
      };
    }
  }
  async waterflowSearch() {
    const ctx = this.ctx;
    const startdate = ctx.query.startdate;
    const enddate = ctx.query.enddate;
    const Info = await ctx.service.flow.waterflowSearch(startdate, enddate);
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
  async flowWarningUpdate() {
    const ctx = this.ctx;
    const request = ctx.request.body;
    const type = request.type;
    const updateData = request.updateData;
    const Info = await ctx.service.flow.flowWarningUpdate(type, updateData);
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
  async warningRead() {
    const ctx = this.ctx;
    const Info = await ctx.service.flow.warningRead();
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
  
  async warningAdd() {
    const ctx = this.ctx;
    const request = ctx.request.body;
    const area = request.area;
    const waterlineMaxNum = request.waterlineMaxNum;
    const flowMaxNum = request.flowMaxNum;
    const speedMaxNum = request.speedMaxNum;
    console.log(request);
    const Info = await ctx.service.flow.warningAdd(
      area,
      waterlineMaxNum,
      flowMaxNum,
      speedMaxNum
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

  async warningDelete() {
    const ctx = this.ctx;
    const area = ctx.query.area;
    const Info = await ctx.service.flow.warningDelete(area);
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

  async warningUpdate() {
    const ctx = this.ctx;
    const request = ctx.request.body;
    const area = request.area;
    const waterlineMaxNum = request.waterlineMaxNum;
    const flowMaxNum = request.flowMaxNum;
    const speedMaxNum = request.speedMaxNum;
    console.log('test'+ area)
    const info = await ctx.service.flow.warningUpdate(
      area,
      waterlineMaxNum,
      flowMaxNum,
      speedMaxNum
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
}

module.exports = FlowController;
