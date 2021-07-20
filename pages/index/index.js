// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    let that = this;
    // wx.scanCode({
    //   success (res) {
    //     console.log("dsadsadsa",res);
    //     that.setData({
    //       data: res.result
    //     })
    //   }
    // })
    wx.navigateTo({
      url: '../scan/scan',
      // url: '../result/index',
    })

  },
  bindViewTapRequest() {
    wx.request({
      url: 'http://qzone-music.qq.com/fcg-bin/cgi_playlist_xml.fcg?uin=QQ%E5%8F%B7%E7%A0%81&json=1&g_tk=1916754934', //仅为示例，并非真实的接口地址
   
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log("fdsfdsfsdfdsf",res.data)
      }
    })

  },
  onLoad(options) {},

})