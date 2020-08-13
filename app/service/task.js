"use strict";

const Service = require("egg").Service;

class TaskService extends Service {
  async taskAdd(publishTime, DoTime, taskState, publishAddress, deviceID, deviceType, mandoID, mandoName, manPublishName, publishTips) {

    const result = await this.app.mysql.insert('task_list', {
      publishTime, DoTime, taskState, publishAddress, deviceID, deviceType, mandoID, mandoName, manPublishName, publishTips,
    });
    return { result };
  }

  async taskRead() {
    // const result = await this.app.mysql.select('test_upload_copy1', { // 搜索 post 表
    //   where: { ID }, // WHERE 条件
    //   columns: [ 'fileUpload' ], // 要查询的表字段
    // });
    // return result;
    const result = await this.app.mysql.query(
      "SELECT * FROM `task_list`"
    );
    for (let i = 0; i < result.length; i++) {
      result[i].publishTime = this.format(result[i].publishTime);
      result[i].DoTime = this.format(result[i].DoTime);
    }
    return result;
  }

  async duanSearch(startdate, enddate) {
    const result = await this.app.mysql.query(
      "SELECT * FROM `table_adcp_data` WHERE `EndTime` <= ? AND `StartTime` >= ?",
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
}

module.exports = TaskService;
