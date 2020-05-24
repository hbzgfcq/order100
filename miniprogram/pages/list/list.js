const app = getApp();
const db = wx.cloud.database();

Page({

  data: {
    goods: [],
  },


  onLoad: function(options) {
    this.currentPage = 0;
    this.pageSize = 3;
    this.getGoods();
  },

  onPullDownRefresh: function(e) {
    this.getGoods(true);
  },
  onReachBottom: function(e) {
    this.currentPage += 1;
    this.getGoods();
  },

  getGoods: function() {
    wx.showLoading({
      title: 'loading',
    });
    db.collection('goods').skip(this.currentPage * this.pageSize).limit(this.pageSize).get({

      success: res => {
        console.log(res.data)
        this.setData({
          goods: this.data.goods.concat(res.data)
        })
        wx.hideLoading();
      }
    });
  },

  toDetail: function(e) {
    const id = e.currentTarget.id;
    console.log(id);
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
    })
  }
})