// pages/demo/demo.js
import regeneratorRuntime from '../../utils/runtime.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: ['wxml', 'js', 'wxss', 'json'],
    arrObj: [
      {
        id: 1,
        name: 'wxml'
      },
      {
        id: 2,
        name: 'js'
      },
      {
        id: 3,
        name: 'wxss'
      },
      {
        id: 4,
        name: 'json'
      }
    ]
  },
  sort () {
    const length = this.data.arr.length
    for (let i = 0; i < length; i++) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.arr[x]
      this.data.arr[x] = this.data.arr[y]
      this.data.arr[y] = temp
    }
    this.setData({
      arr: this.data.arr
    })
  },
  sortObj () {
    const length = this.data.arrObj.length
    for (let i = 0; i < length; i++) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.arrObj[x]
      this.data.arrObj[x] = this.data.arrObj[y]
      this.data.arrObj[y] = temp
    }
    this.setData({
      arrObj: this.data.arrObj
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 定义变量尽量用let，const
    // 定义对象 {}
    // 定义数组 []

    // const userName = 'hjp'
    // const person = {
    //   userName,
    //   age: 18
    // }

    // wx.cloud.callFunction({
    //   name: 'login'
    // }).then(function (res) {
    //   console.log(res)
    // })

    // setTimeout(() => {
    //   console.log(1)
    // }, 1000)
    // console.log(2)

    // callback hell
    // setTimeout(() => {
    //   console.log(1)
    //   setTimeout(() => {
    //       console.log(2)
    //       setTimeout(() => {
    //         console.log(3)
    //       }, 3000)
    //     }, 2000)
    // }, 1000)

    // promise
    /**
     * pedding
     * fulfilled
     * rejected
     */
    // new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     console.log(1)
    //     resolve()
    //   }, 1000)
    // }).then((res) => {
    //   setTimeout(() => {
    //     console.log(2)
    //   }, 2000)
    // })

    let p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('p1')
      }, 1000)
    })
    let p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('p2')
      }, 2000)
    })
    let p3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('p3')
      }, 3000)
    })
    // Promise.all()
    // Promise.all([p1, p2, p3]).then((res) => {
    //   console.log('全部完成')
    //   console.log(res)
    // }).catch((err) => {
    //   console.log('失败')
    //   console.log(err)
    // })

    // Promise.race()
    // Promise.race([p1, p2, p3]).then((res) => {
    //   console.log('全部完成')
    //   console.log(res)
    // }).catch((err) => {
    //   console.log('失败')
    //   console.log(err)
    // })

    // async await ES7
    this.foo()
    // console.log(this.foo())
    this.timeout()
  },

  // foo () {
  //   console.log('foo')
  // },

  async foo () {
    console.log('foo')
    return 1
    let res = await this.timeout()
    console.log(res)
  },

  timeout () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(1)
        resolve('resolve')
      }, 1000)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})