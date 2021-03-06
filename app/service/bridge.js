'use strict';

const Service = require('egg').Service;

class BridgeService extends Service {
  async bridgeAdd(bridgeID, bridgeName, lon, lat) {

    const result = await this.app.mysql.insert('test_bridge', {
      bridgeID,
      bridgeName,
      lon,
      lat,
    });
    return { result };
  }

  async bridgeUpdate(bridgeID, bridgeName, lon, lat) {
    const options = {
      where: {
        bridgeID,
      },
    };
    const result = await this.app.mysql.update('test_bridge', {
      bridgeID,
      bridgeName,
      lon,
      lat,
    }, options);
    return { result };
  }
  async bridgeDelete(bridgeID) {
    const result = await this.app.mysql.delete('test_bridge', {
      bridgeID,
    });
    return { result };
  }
  async bridgeRead() {
    const sql1 = 'SELECT * FROM `test_bridge`';
    const bridgeInfo = await this.app.mysql.query(sql1);
    return { bridgeInfo };
  }
  async bridgeState1(bridgeID) {
    const options = {
      where: {
        bridgeID,
      },
    };
    const result = await this.app.mysql.update('test_bridge', {
      state: '1',
    }, options);
    return { result };
  }
  async bridgeState0(bridgeID) {
    const options = {
      where: {
        bridgeID,
      },
    };
    const result = await this.app.mysql.update('test_bridge', {
      state: '0',
    }, options);
    return { result };
  }
  async bridgeSearchID(bridgeName) {
    // const result = await this.app.mysql.select('test_upload_copy1', { // 搜索 post 表
    //   where: { ID }, // WHERE 条件
    //   columns: [ 'fileUpload' ], // 要查询的表字段
    // });
    // return result;
    const result = await this.app.mysql.query('SELECT `bridgeID` FROM `test_bridge` WHERE bridgeName = ?', [ bridgeName ]);
    return result ;
  }

}

module.exports = BridgeService;
