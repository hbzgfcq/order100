
var app = getApp();

Page({
  getUserInfo: function(e) {
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        e.detail.userInfo.openID = res.result.wxContext.OPENID;
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
          userInfo:e.detail.userInfo,
          hasUserInfo:true
        });
        wx.setStorageSync('userInfo', e.detail.userInfo);
      }
    })
  }
})