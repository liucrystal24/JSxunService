"use strict";

const Controller = require("egg").Controller;

class RootController extends Controller {
  async login() {
    const ctx = this.ctx;
    const city = ctx.query.city;
    const username = ctx.query.username;
    const password = ctx.query.password;
    const loginInfo = await ctx.service.root.login(username);
    if (loginInfo.length === 0) {
      ctx.body = {
        code: 0,
      };
    } else {
      const passwordC = loginInfo[0].password;
      const cityC = loginInfo[0].city;
      console.log(loginInfo[0]);
      console.log(password, city);
      console.log(passwordC, cityC);
      if (password === passwordC && city === cityC) {
        ctx.body = {
          code: 1,
        };
      } else {
        ctx.body = {
          code: 0,
        };
      }
    }
  }
  async npRoot() {
    const ctx = this.ctx;
    const username = ctx.query.username;
    const password = ctx.query.password;
    const Info = await ctx.service.root.npRoot(username, password);
    if (Info.length === 0) {
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
  async tdRoot() {
    const ctx = this.ctx;
    const token = ctx.query.token;
    const deviceID = ctx.query.deviceID;
    const Info = await ctx.service.root.tdRoot(token, deviceID);
    if (Info.length === 0) {
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
  async rootRead() {
    const ctx = this.ctx;
    const Info = await ctx.service.root.rootRead();
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
  async rootUpdate() {
    const ctx = this.ctx;
    const request = ctx.request.body;
    const username = request.username;
    const taskPublish = request.taskPublish;
    const taskOne = request.taskOne;
    const taskTwo = request.taskTwo;
    const warningUpdate = request.warningUpdate;
    const duanCheck = request.duanCheck;
    const dataAny = request.dataAny;
    const Info = await ctx.service.root.rootUpdate(
      username,
      taskPublish,
      taskOne,
      taskTwo,
      warningUpdate,
      duanCheck,
      dataAny
    );
    if (Info.affectedRows === 0) {
      ctx.body = {
        code: 0,
      };
    } else {
      ctx.body = {
        code: 1
      };
    }
  }
}

module.exports = RootController;
