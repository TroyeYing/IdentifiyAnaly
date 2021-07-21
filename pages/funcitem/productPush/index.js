 

Page({

    data: {
  
      swiperCurrent: 0,
  
      indicatorDots: true,
  
      autoplay: true,
  
      interval: 3000,
  
      duration: 800,
  
      circular:true,
  
      imgUrls: [
  
        '/images/2.jpg',
  
        '/images/4.jpg',
  
      ],
  
      links:[
  
        '../user/user',
  
        '../user/user',
  
        '../user/user'
  
      ]
  
      
  
    },
  
    //轮播图的切换事件
  
    swiperChange: function (e) {
  
      this.setData({
  
        swiperCurrent: e.detail.current
  
      })
  
    },
  
    //点击指示点切换
  
    chuangEvent: function (e) {
  
      this.setData({
  
        swiperCurrent: e.currentTarget.id
  
      })
  
    },
  
    //点击图片触发事件
  
    swipclick: function (e) {
  
      console.log(this.data.swiperCurrent);
  
      wx.switchTab({
  
        url: this.data.links[this.data.swiperCurrent]
  
      })
  
    },
    pushEditor: function () {
      wx.navigateTo({
        url: '../productPushEditor/index',
      })
    },
    change(){
        wx.navigateTo({
          url: '../scan/scan',
        })
    },
    getInfo(){
        wx.navigateTo({
          url: '../function/trace/index',
        })
    }
  
  })