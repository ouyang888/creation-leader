// pages/addGoods/addGoods.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    servenImg: '',
    goodsNameLengthNum: "0"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      servenImg: app.uploadImg.url,
    })
  },

  // 商品名称输入
  goodsNameHandle(e) {
    this.setData({
      goodsNameLengthNum:e.detail.value.length
    })
  }

})