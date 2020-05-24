// components/x-segmentPane/x-segmentPane.js
Component({
  externalClasses: ['segment-cls'],
  /**
   * 组件的属性列表
   */
  properties: {
    segmentItems: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIdx:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _paneChange:function(e){
      let sb = this.selectComponent("#xs_in_pane");
      console.log(e);
      let idx = e.detail.current;
      sb.setCurrent(idx);
    },
    _handlerSelectChange:function(e){
      console.log(e);
      let idx = parseInt(e.detail.currentIdx);
      this.setData({
        currentIdx:idx
      });
    }
  }
})