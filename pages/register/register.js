// pages/login/login.js
const app = getApp()
var interval = null //倒计时函数
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: "",
    timeCode:"获取验证码",
    date: '请选择日期',
    fun_id: 2,
    currentTime: 61,
    phone:""
  },
  getCode: function (options) {
    if (this.data.phone == "") {
      wx.showToast({
        title: '请输入手机号',
        icon: 'none',
        duration: 2000//持续的时间
      })
    }
    var that = this;
    var currentTime = that.data.currentTime
    interval = setInterval(function () {
      currentTime--;
      that.setData({
        timeCode: currentTime + '秒'
      })
      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          timeCode: '重新发送',
          currentTime: 61,
          disabled: false
        })
      }
    }, 1000)
  },
  getVerificationCode:function(){
    this.getCode();
    var that = this
    that.setData({
      disabled: true
    })
  },
  phoneChange:function(e){
    let that = this
    that.setData({
      phone: e.detail.value
    })
  },
  login: function (e) {
    // if (this.data.phone == ""){
    //   wx.showToast({
    //     title: '请输入手机号',
    //     icon: 'none',
    //     duration: 2000//持续的时间
    //   })
    // }
    wx.navigateTo({
      url: './nextRegister/nextRegister',
    })
   
  },
  gotoRegister: function () {
    wx.navigateTo({
      url: '../register/register',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      imgUrl: app.uploadImg.url,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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