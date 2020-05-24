const app = getApp();
const db = wx.cloud.database();

Page({
  data: {

  },

  addGoods: function(e) {
    wx.chooseImage({
      success: function(res) {
        console.log(res.tempFilePaths[0]);
        const tfp = res.tempFilePaths[0];
        const tfp1 = tfp.split('.');
        const cloudPath = 'goods-' + tfp1[tfp1.length - 2];
        console.log(cloudPath);
        wx.cloud.uploadFile({
          cloudPath,
          filePath: tfp,
          success: (res) => {
            db.collection('goods').add({
              data: {
                title: 'goods 1',
                price: 16,
                tags: ['book', 'food'],
                fileID: res.fileID
              },
              success: res => {
                console.log(res);
                wx.showToast({
                  title: '添加商品成功'
                })
              }
            })
          },
          fail: (res) => {
            console.log(res);
          }
        });
      },
    })
  }
})