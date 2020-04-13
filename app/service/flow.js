'use strict';

const Service = require('egg').Service;

class FlowService extends Service {
  // async bridgeAdd(bridgeID, bridgeName, lon, lat) {

  //   const result = await this.app.mysql.insert('test_bridge', {
  //     bridgeID,
  //     bridgeName,
  //     lon,
  //     lat,
  //   });
  //   // console.log(result);
  //   return { result };
  // }

  // async bridgeUpdate(bridgeID, bridgeName, lon, lat) {
  //   const options = {
  //     where: {
  //       bridgeID,
  //     },
  //   };
  //   const result = await this.app.mysql.update('test_bridge', {
  //     bridgeID,
  //     bridgeName,
  //     lon,
  //     lat,
  //   }, options);
  //   // console.log(result);
  //   return { result };
  // }
  // async bridgeDelete(bridgeID) {
  //   const result = await this.app.mysql.delete('test_bridge', {
  //     bridgeID,
  //   });
  //   // console.log(result);
  //   return { result };
  // }
  async flowRead() {
    const sql1 = 'SELECT * FROM `test_upload_copy1`';
    const flowInfo = await this.app.mysql.query(sql1);
    for (let i = 0; i < flowInfo.length; i++) {
      flowInfo[i].testTime = this.format(flowInfo[i].testTime);
    }
    return { flowInfo };
  }

  async flowImage(ID) {
    // const result = await this.app.mysql.select('test_upload_copy1', { // 搜索 post 表
    //   where: { ID }, // WHERE 条件
    //   columns: [ 'fileUpload' ], // 要查询的表字段
    // });
    // return result;
    const result = await this.app.mysql.query('SELECT `fileUpload` FROM `test_upload_copy1` WHERE ID = ?', [ ID ]);
    // console.log(result);
    // console.log(result[0].fileUpload);
    if (result[0].fileUpload != null) {
      console.log(result[0].fileUpload);
    } else {
      console.log('0');
    }
    return result[0].fileUpload;
  }

  format(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const hour = date.getHours();
    const minute = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    // var minute = date.getMinutes();
    const second = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    // var second = date.getSeconds();

    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
  }
}

module.exports = FlowService;
