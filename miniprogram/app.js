//app.js
App({
  onLaunch: function() {

    wx.cloud.init({
      env: "hbzgfcq-kbdgg"
    });
  },

  globalData: {
    userInfo: null
  }
})