"use strict";

const Service = require("egg").Service;

class FlowService extends Service {
  async flowRead() {
    //const sql1 = 'SELECT * FROM `test_upload`';
    //const flowInfo = await this.app.mysql.query(sql1);
    //for (let i = 0; i < flowInfo.length; i++) {
    //  if(flowInfo[i].testTime != null){
    //    flowInfo[i].testTime = this.format(flowInfo[i].testTime);
    //  }
    //}

    const flowInfo = await this.app.mysql.select("test_upload", {
      // 搜索 test_upload 表
      // where: { status: 'draft', author: ['author1', 'author2'] }, // WHERE 条件
      columns: ["ID", "bridgeID", "flowData", "deviceType", "testTime"], // 要查询的表字段
      orders: [["testTime", "desc"]], // 排序方式
      // limit: 10, // 返回数据量
      offset: 0, // 数据偏移量
    });
    for (let i = 0; i < flowInfo.length; i++) {
      if (flowInfo[i].testTime != null) {
        flowInfo[i].testTime = this.format(flowInfo[i].testTime);
      }
    }
    console.log(flowInfo);
    return { flowInfo };
  }

  async flowImage(ID) {
    // const result = await this.app.mysql.select('test_upload_copy1', { // 搜索 post 表
    //   where: { ID }, // WHERE 条件
    //   columns: [ 'fileUpload' ], // 要查询的表字段
    // });
    // return result;
    const result = await this.app.mysql.query(
      "SELECT `fileUpload` FROM `test_upload` WHERE ID = ?",
      [ID]
    );
    // console.log(result);
    // console.log(result[0].fileUpload);
    if (result[0].fileUpload != null) {
      console.log(result[0].fileUpload);
    } else {
      console.log("0");
    }
    return result[0].fileUpload;
  }

  async flowUpload(
    bridgeID,
    flowData,
    deviceType,
    testTime,
    fileUpload,
    lon,
    lat
  ) {
    // console.log(fileUpload)
    if (fileUpload != "") {
      // fileUpload = this.base64ToUint8Array(fileUpload);
      // fileUpload = Buffer.from(fileUpload,'base64').toString('utf-8')
      console.log(`--exsit--`);
      console.log(`${fileUpload}`);
    } else {
      console.log(`none`);
    }
    const result = await this.app.mysql.insert("test_upload", {
      bridgeID,
      flowData,
      deviceType,
      testTime,
      fileUpload,
      lon,
      lat,
    });
    return { result, bridgeID, flowData, deviceType, testTime, lon, lat };
  }

  async waterflowSearch(startdate, enddate) {
    const result = await this.app.mysql.query(
      "SELECT StartTime,EndTime,Flow,WaterLine,SectionNum,BridgeNum,DeviceType FROM `table_flow` WHERE `EndTime` <= ? AND `StartTime` >= ?",
      [enddate, startdate]
    );
    for (let i = 0; i < result.length; i++) {
      result[i].StartTime = this.format(result[i].StartTime);
      result[i].EndTime = this.format(result[i].EndTime);
    }
    return result;
  }

  format(date) {
    const year = date.getFullYear();
    const month1 = date.getMonth() + 1;
    const month = month1 < 10 ? "0" + month1 : month1;
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

    const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minute =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

    const second =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    return (
      year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second
    );
  }

  dataURLtoBlob(dataurl) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

  base64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
}

module.exports = FlowService;
