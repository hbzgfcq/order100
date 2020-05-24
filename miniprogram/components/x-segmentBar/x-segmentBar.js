Component({
  /**
   * 组件的属性列表
   */
  properties: {
    segmentItems: {
      type:Array,
      value:[],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setCurrent:function(idx){
      this.setData({
        currentIndex:idx
      })
    },
    _handlerTap:function(e){
      console.log(e);
      let cid = e.currentTarget.id;
      this.setData({
        currentIndex:cid
      });
      // 子组件在事件处理函数中发射自定义事件（01）
      // 通过事件对象给父组件传数据
      this.triggerEvent(
        'selectChange', 
        { currentIdx:cid }, 
        {}
      );
    }
  }
})