// pages/login/login.js
const app = getApp()
let storage = require("../../utils/storage.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: "",
    phone: "",
    password: ""
  },
  phoneChange: function(e) {
    let that = this
    that.setData({
      phone: e.detail.value
    })
  },
  passwordChange: function(e) {
    let that = this
    that.setData({
      password: e.detail.value
    })
  },
  login: function(e) {
    if (this.data.phone == "") {
      wx.showToast({
        title: '请输入手机号',
        icon: 'none',
        duration: 2000 //持续的时间
      })
      return;
    }
    if (this.data.password == "") {
      wx.showToast({
        title: '请输入密码',
        icon: 'none',
        duration: 2000 //持续的时间
      })
      return;
    }
    let item = {
      tel: this.data.phone,
      password: this.data.password
    }
    app.xhr('POST', app.apiUrl.login, item, '', (res) => {
      if (res.data.code === 0) {
        storage.set("token", res.data.data)
        wx.switchTab({
          url:"../manage/manage"
        })
      }
    })
  },
  gotoRegister: function() {
    wx.navigateTo({
      url: '../register/register',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      imgUrl: app.uploadImg.url,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})