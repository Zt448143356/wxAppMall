// page/component/details/details.js
Page({
  data:{
    goods: {
      id: 1,
      image: '/image/c3.png',
      title: '红枣',
      price: 0.01,
      stock: '有货',
      detail: '这里是红枣详情。',
      parameter: '125g',
      service: '不支持退货'
    },
    num: 1,
    totalNum: 0,
    hasCarts: true,
    curIndex: 0,
    show: false,
    scaleCart: false,
  },

  onShow(){
    var self = this;
    var totalNum = 0;
    wx.getStorage({
      key: 'totalNum',
      success:function(res){
        totalNum = res.data
        self.setData({
          totalNum: res.data
        })
      }
    })

    if(totalNum>0){
      this.setData({
        hasCarts:true
      })
    }
  },

  addCount() {
    let num = this.data.num;
    num++;
    this.setData({
      num : num
    })
  },

  minusCount(){
    let num = this.data.num;
    if(num>0){
      num--;
    }
    this.setData({
      num : num
    })
  },

  addToCart() {
    const self = this;
    const num = this.data.num;
    let total = this.data.totalNum;
    let carts;

    self.setData({
      show: true
    })
    setTimeout( function() {
      self.setData({
        show: false,
        scaleCart : true
      })
      setTimeout( function() {
        self.setData({
          scaleCart: false,
          hasCarts : true,
          totalNum: num + total
        })
        wx.setStorage({
          data: total + num,
          key: 'totalNum',
        })
      }, 200)
    }, 300)

    wx.getStorage({
      key: 'carts',
      success:function(res){
        carts = res.data
        let item = {id:3,title:'红枣 125g',image:'/image/c3.png',num:num,price:0.01,selected:true}
        carts.push(item)
        wx.setStorage({
          data: carts,
          key: 'carts',
        })
      }
    })
  },

  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }
 
})