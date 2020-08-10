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
      // ctx.body = imgInfo;
      ctx.body = imgInfo
    }
  }
  async flowUpload() {
    const ctx = this.ctx;
    const request = ctx.request.body;
    const bridgeID = request.bridgeID;
    const flowData = request.flowData;
    const deviceType = request.deviceType;
    const testTime = request.testTime;
    const fileUpload = request.fileUpload;
    const lon = request.lon;
    const lat = request.lat;
    const fileUploadInfo = await ctx.service.flow.flowUpload(
      bridgeID,
      flowData,
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
          'bridgeID': fileUploadInfo.bridgeID,
          'flowData': fileUploadInfo.flowData,
          'deviceType': fileUploadInfo.deviceType,
          'testTime': fileUploadInfo.testTime,
          'lon': fileUploadInfo.lon,
          'lat': fileUploadInfo.lat,
        }
      }
    }
  }

}

module.exports = FlowController;
