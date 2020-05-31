// pages/manage/manage.js
const app = getApp()
let storage = require("../../utils/storage.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    servenImg: '',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let asstoken = storage.get_s("token")
    console.log("111222", asstoken)
    if (asstoken == '' || asstoken == undefined || asstoken == null) {
      wx.navigateTo({
        url: '../login/login',
      })
    }
    this.setData({
      servenImg: app.uploadImg.url,
    })
  },

  // 跳转到户型管理
  goAddHouserManage() {
    wx.navigateTo({
      url: '../addHouseManage/addHouseManage',
    })
  },

  // 跳转到楼盘信息
  goBuildManage() {
    wx.navigateTo({
      url: '../buildManage/buildManage',
    })
  },

  //跳转到商品管理
  goGoodsMassage() {
    wx.navigateTo({
      url: '../goodsMassage/goodsMassage',
    })
  },

  //跳转到项目发布
  goHouseManage() {
    wx.navigateTo({
      url: '../houseManage/houseManage',
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