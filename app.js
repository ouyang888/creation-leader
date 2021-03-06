//app.js
let storage = require('utils/storage.js')
App({
  onLoad: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  //弹框
  toast: function(title, icon, cb, duration = 500) {
    wx.showToast({
      title,
      icon,
      duration,
      mask: true,
      success: () => {
        if (typeof(cb) == "function") {
          cb()
        }
      }
    })
  },
  //接口前缀封装
  xhr: function(method, url, obj = null, token = '', cb) {
    var that = this
    wx.request({
      url: 'https://sandbox-api.scypaas.com' + url,
      data: obj,
      method,
      header: {
        'Content-Type': 'application/json',
        'X-TOKEN': storage.get_s("token")
      },
      success: function(res) {
        if (typeof(cb) == "function") {
          cb(res)
        }
      },
      fail: function(error) {
        console.log(error)
      }
    })
  },
  //图片上传7牛地址前缀
  uploadImg: {
    url: "http://q9x0aceuu.bkt.clouddn.com/"
  },


  //接口列表
  apiUrl: {
    login: "/api/shop/user/login" //登录
  }
})