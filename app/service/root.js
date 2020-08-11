'use strict';

const Service = require('egg').Service;

class RootService extends Service {

  async login(username) {
    // const result = await this.app.mysql.select('test_upload_copy1', { // 搜索 post 表
    //   where: { ID }, // WHERE 条件
    //   columns: [ 'fileUpload' ], // 要查询的表字段
    // });
    // return result;
    const result = await this.app.mysql.query('SELECT `password`,`city` FROM `login_user` WHERE username = ?', [ username ]);
    return result;
  }
}

module.exports = RootService;