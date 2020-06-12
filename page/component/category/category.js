Page({
    data: {
        category: [
            {name:'水果',id:'guowei'},
            {name:'蔬菜',id:'shucai'},
            {name:'果干',id:'chaohuo'},
            {name:'分类1',id:'dianxin'},
            {name:'分类2',id:'cucha'},
            {name:'分类3',id:'danfan'}
        ],
        detail:[],
        curIndex: 0,
        isScroll: false,
        toView: 'guowei'
    },
    onReady(){
        var self = this;
        self.setData({
          detail : [
            {id:"guowei",banner:"/image/c1.png",cate:"水果",detail:[{thumb:"/image/c2.png",name:"梨子"},{thumb:"/image/c2.png",name:"梨子"},{thumb:"/image/c2.png",name:"梨子"}]},
            {id:"shucai",banner:"/image/c1.png",cate:"蔬菜",detail:[{thumb:"/image/c3.png",name:"红枣"},{thumb:"/image/c2.png",name:"梨子"},{thumb:"/image/c2.png",name:"梨子"}]},
            {id:"chaohuo",banner:"/image/c1.png",cate:"果干",detail:[{thumb:"/image/c4.png",name:"猕猴桃"},{thumb:"/image/c2.png",name:"梨子"},{thumb:"/image/c2.png",name:"梨子"}]},
            {id:"dianxin",banner:"/image/c1.png",cate:"分类1",detail:[{thumb:"/image/c4.png",name:"猕猴桃"},{thumb:"/image/c2.png",name:"梨子"},{thumb:"/image/c2.png",name:"梨子"}]},
            {id:"cucha",banner:"/image/c1.png",cate:"分类2",detail:[{thumb:"/image/c3.png",name:"红枣"},{thumb:"/image/c2.png",name:"梨子"},{thumb:"/image/c2.png",name:"梨子"}]},
            {id:"danfan",banner:"/image/c1.png",cate:"分类3",detail:[{thumb:"/image/c2.png",name:"梨子"},{thumb:"/image/c2.png",name:"梨子"},{thumb:"/image/c2.png",name:"梨子"}]},
        ]
        })
        // wx.request({
        //     url:'',
        //     success(res){
        //         self.setData({
        //             detail : res.data
        //         })
        //     }
        // });
        
    },
    switchTab(e){
      const self = this;
      this.setData({
        isScroll: true
      })
      setTimeout(function(){
        self.setData({
          toView: e.target.dataset.id,
          curIndex: e.target.dataset.index
        })
      },0)
      setTimeout(function () {
        self.setData({
          isScroll: false
        })
      },1)
        
    }
    
})