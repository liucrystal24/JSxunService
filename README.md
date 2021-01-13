# 江苏巡测平台后台

### 1、运行（根目录）

```bash
# 安装所需依赖
npm install

# 测试环境运行
npm run dev

# 生产环境启动服务
npm start

# 生产环境关闭服务
npm stop
```

### 2、项目结构

#### 项目搭建工具

1. 项目使用 Egg.JS 搭建，项目结构参考官方说明（说明文档：https://eggjs.org/zh-cn/intro/）

#### 主要目录说明

1. app / controller : 控制器，处理接口返回数
2. app / service : 服务，处理数据库接口
3. app / router.js：接口地址路由
4. config  服务地址配置（包括数据库）

### 3、接口文档

接口字段文档说明地址：https://easydoc.xyz/s/38259950