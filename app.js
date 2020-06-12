App({
  onLaunch: function () {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
 
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }else{
          // 未授权，跳转到授权页面
          wx.reLaunch({
            url: '/page/component/auth/auth',
          })
        }
      }
    })

    wx.setStorage({
      data: 5,
      key: 'totalNum',
    })

    wx.setStorage({
      data: [
        {id:1,title:'芒果 100g',image:'/image/s1.jpg',num:4,price:0.01,selected:true},
        {id:2,title:'苹果 500g',image:'/image/s2.jpg',num:1,price:0.03,selected:true}
      ],
      key: 'carts',
    })
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false,
    userInfo: ''
  }
})
