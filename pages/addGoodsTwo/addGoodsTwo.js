// pages/addGoodsTwo/addGoodsTwo.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    servenImg: '',
    index: 0,
    selectList: ['元/m', '个'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      servenImg: app.uploadImg.url,
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },

  //保存-点击
  setAddItem(){
    wx.navigateTo({
      url: '../goodsMassage/goodsMassage',
    })
  }
})