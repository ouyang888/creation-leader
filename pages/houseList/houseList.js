//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    tabList: ['推荐套餐', '窗/防盗网', '电视背景', '乳胶漆', '天花', '门锁'],

    //推荐套餐
    productList: [
      {
        id:"2020",
        projectName: "百变房套餐项目",
        product: [{
            id: "01",
            productName: "百变房铝合金窗",
            productSizeName: "凤铝1.4厚铝合金窗",
            productType: [{
                id: "123",
                name: "加厚型"
              },
              {
                id: "456",
                name: "铝合金"
              }
            ],
            productMoney: "2100"
          },
          {
            id: "02",
            productName: "百变房铝合金窗2",
            productSizeName: "凤铝1.4厚铝合金窗",
            productType: [{
                id: "789",
                name: "加厚型"
              },
              {
                id: "987",
                name: "铝合金"
              }
            ],
            productMoney: "2100"
          }
        ]
      },
      {
        id:"2021",
        projectName: "百变房套餐项目2",
        product: [{
            id: "01",
            productName: "百变房铝合金窗",
            productSizeName: "凤铝1.4厚铝合金窗",
            productType: [{
                id: "123",
                name: "加厚型"
              },
              {
                id: "456",
                name: "铝合金"
              }
            ],
            productMoney: "2100"
          },
          {
            id: "02",
            productName: "百变房铝合金窗2",
            productSizeName: "凤铝1.4厚铝合金窗",
            productType: [{
                id: "789",
                name: "加厚型"
              },
              {
                id: "987",
                name: "铝合金"
              }
            ],
            productMoney: "2100"
          }
        ]
      },
    ],
    leftTabActived: 0, //左侧栏-当前选中值
    servenImg: '',
    isShowProjectList:true//判断项目显示\隐藏
  },
  onLoad: function () {
    this.setData({
      servenImg: app.uploadImg.url,
    })
  },
  // 左侧栏-点击获取当前选中的值
  handleTab(index) {
    this.setData({
      leftTabActived: index.currentTarget.dataset.index
    })
  },

  //右侧栏-点击标题-收缩效果
  handleTitle(data) {
      let index = data.currentTarget.dataset.index;
  },

  //跳转到多规格或者非多规格--页面
  goEditType(index){
    if(index.currentTarget.dataset.index === 0){
      // 跳转到多规格
      wx.navigateTo({
        url: '../houseType/houseType',
      })
    }else{
      //跳转到非多规格
      wx.navigateTo({
        url: '../houseEditType/houseEditType',
      })
    }
   
  }
})