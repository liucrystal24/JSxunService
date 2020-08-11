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
}

module.exports = RootController;
