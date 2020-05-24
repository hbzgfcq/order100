
const db = wx.cloud.database();

Page({
  data:{
    cates:[],
    goods:[{
      goodsID:0,
      src:"../../images/1.jpg",
      goodsName:"伊利优酸乳",
      goodsPrice:"￥100/件"
    },{
      goodsID:1,
      src:"../../images/1.jpg",
      goodsName:"伊利优酸乳",
      goodsPrice:"￥100/件"
    },{
      goodsID:2,
      src:"../../images/1.jpg",
      goodsName:"伊利优酸乳",
      goodsPrice:"￥100/件"
    }]
  },
  
  onLoad:function(e){
    const cates = db.collection('cates').get().
    then(res=>{
      console.log(res);
      this.setData({
        cates:res.data.cateName
      });
    })
  }
})
