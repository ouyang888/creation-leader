// pages/authentication/authentication.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: "",
    frontsrc: "",
    reversesrc: "",
  },
  //上传正面身份证
  gotoShow: function(e) {
    let that = this
    var num = e.currentTarget.id;
    if (num == "1") {
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths
          if (res.tempFiles[0].size > 2097152) {
            wx.showToast({
              title: '图片已超过2M',
              icon: 'none',
              duration: 2000 //持续的时间
            })
            return;
          }
          that.setData({
            frontsrc: tempFilePaths
          })
          that.upLoadImg(tempFilePaths, 'card_user')
        }
      })
    } else if (num == "2") {
      //上传反面身份证
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths
          if (res.tempFiles[0].size > 2097152) {
            wx.showToast({
              title: '图片已超过2M',
              icon: 'none',
              duration: 2000 //持续的时间
            })
            return;
          }
          that.setData({
            reversesrc: tempFilePaths
          })
          that.upLoadImg(tempFilePaths, 'card_guohui')
        }
      })
    }
  },

  upLoadImg: function(list, type) {
    var that = this;
    this.upload(that, list, type);
  },

  upload: function(page, path, type) {
    var that = this;
    var curImgList = [];
    for (var i = 0; i < path.length; i++) {
      wx.showToast({
          icon: "loading",
          title: "正在上传"
        }),
        wx.uploadFile({
          url: 填写你的接口, //接口处理
          filePath: path[0],
          name: 'files',
          header: {
            "Content-Type": "multipart/form-data"
          },
          formData: {
            douploadpic: '1',
            token: _KMJH_Data.duoguan_user_token
          },
          success: function(res) {


            var imgdata = JSON.parse(res.data);
            //从json对象中创建JavaScript对象

            if (type == 'card_user') {
              that.setData({
                card_user: imgdata.savename
              })
            } else if (type == 'card_guohui') {
              that.setData({
                card_guohui: imgdata.savename
              })
            } else if (type == 'card_hand') {
              that.setData({
                card_hand: imgdata.savename
              })
            }

            if (res.statusCode != 200) {
              wx.showModal({
                title: '提示',
                content: '上传失败',
                showCancel: false
              })
              return;
            }
            var data = res.data

            page.setData({ //上传成功修改显示头像
              src: path[0]
            })
          },
          fail: function(e) {
            wx.showModal({
              title: '提示',
              content: '上传失败',
              showCancel: false
            })
          },
          complete: function() {
            wx.hideToast(); //隐藏Toast
          }
        })
    }
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