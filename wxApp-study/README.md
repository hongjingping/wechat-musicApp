# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)


### 课程笔记
1. 组件化开发
  1. 组成
    1. 结构-wxml
    2. 逻辑-js
    3. 样式-wxss
  2. 优势
    1. 对代码实现分层，有效的代码组合
    2. 对资源的重组和优化，利于代码管理
    3. 利于单元测试
    4. 对重构比较友好
  3. 设计原则
    1. 高内聚，低耦合
    2. 职责单一
    3. 避免过多参数
  4. 本项目的组件
    1. 首页
      1. 自定义歌单组件
      2. 歌曲组件
      3. 歌曲进度条组件
      4. 歌词组件
    2. blog页面
      1. blog卡片组件
      2. blog控制组件
      3. 底部弹出框组件(要进行授权)
      4. 登录组件
    3. 我的页面
      1. 搜索组件
  2. 云函数tcb-router
    1. 一个用户在一个环境只能创建50个云函数
    2. 相似的请求放在一个云函数中处理
    3. koa洋葱模型（类似中间件）
  3. 小程序组件 -> 组件化开发
    1. swiper
    2. swiper-item
    3. wx:key  wx:for  async/await
  
