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
  async npRoot(username, password) {
    const result = await this.app.mysql.query('SELECT `taskPublish`,`taskOne`,`taskTwo`,`warningUpdate`,`duanCheck`,`dataAny`,`token` FROM `login_user` WHERE username = ? AND password = ?', [ username, password ]);
    return result;
  }
  async tdRoot(token, deviceID) {
    const result = await this.app.mysql.query('SELECT `taskPublish`,`taskOne`,`taskTwo`,`warningUpdate`,`duanCheck`,`dataAny` FROM `login_user` WHERE token = ? AND deviceID = ?', [ token, deviceID ]);
    return result;
  }
  
}

module.exports = RootService;
