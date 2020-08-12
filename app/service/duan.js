'use strict';

const Service = require('egg').Service;

class DuanService extends Service {

  async duanRead() {
    // const result = await this.app.mysql.select('test_upload_copy1', { // 搜索 post 表
    //   where: { ID }, // WHERE 条件
    //   columns: [ 'fileUpload' ], // 要查询的表字段
    // });
    // return result;
    const result = await this.app.mysql.query('SELECT DISTINCT BridgeNum,DeviceID,Number FROM `table_section`');
    return result;
  }
}

module.exports = DuanService;
