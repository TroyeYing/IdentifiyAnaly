// scan.js
// 移动动画
let animation = wx.createAnimation({});
// 提示音
// let innerAudioContext = wx.createInnerAudioContext()
// innerAudioContext.src = '/images/beep.mp3'

Page({
  data: {
    isScan: true
  },
  onLoad: function () {
    this.setData({
      isScan: true
    })
  },

  onShow() {
    this.donghua()
  },
  donghua() {
    var that = this;
    // 控制向上还是向下移动
    let m = true

    setInterval(function () {
      if (m) {
        animation.translateY(200).step({
          duration: 3000
        })
        m = !m;
      } else {
        animation.translateY(-10).step({
          duration: 3000
        })
        m = !m;
      }

      that.setData({
        animation: animation.export()
      })
    }.bind(this), 3000)
  },
  scancode(e) {
    // 提示音
    console.log("e", e)
    // innerAudioContext.play()
    // 校验扫描结果，并处理

    let res = e.detail.result || '';
    if (this.data.isScan) {
      this.setData({
        isScan: false
      })
      wx.navigateTo({
        // url: '/pages/result/index?result=' + res,
        url:"../function/trace/index"
      });
    }

  }
})