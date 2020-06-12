let timeId = null;
Page({
    data: {
        history: [],
        hot: ['大红枣', '猕猴桃','热度列表'],
        result: [
            {
                id: 1,
                url: '../details/details',
                thumb: '/image/s1.jpg',
                title: '芒果 100g',
                price: 0.01
            },
            {
                id: 2,
                url: '../details/details',
                thumb: '/image/s2.jpg',
                title: '苹果 500g',
                price: 0.02
            }
        ],
        showKeywords: false,
        keywords: ['红枣', '猕猴桃', '苹果', '关键词列表'],
        value: '',
        showResult: false,
    },
    cancelSearch() {
        this.setData({
            showResult: false,
            showKeywords: false,
            value: ''
        })
    },
    searchInput(e) {
        if(!e.detail.value){
            this.setData({
                showKeywords: false
            })
        }else{
            if(!this.data.showKeywords){
                timeId && clearTimeout(timeId);
                timeId = setTimeout(() => {
                    this.setData({
                        showKeywords: true
                    })
                }, 1000)
            }
        }
    },
    keywordHandle(e) {
        const text = e.target.dataset.text;
        this.setData({
            value: text,
            showKeywords: false,
            showResult: true
        })
        this.historyHandle(text);
    },
    historyHandle(value) {
        let history = this.data.history;
        const idx = history.indexOf(value);
        if (idx === -1) {
            // 搜索记录只保留8个
            if (history.length > 7) {
                history.pop();
            }
        } else {
            history.splice(idx, 1);
        }
        history.unshift(value);
        wx.setStorageSync('history', JSON.stringify(history));
        this.setData({
            history
        });
    },
    onLoad() {
        const history = wx.getStorageSync('history');
        if (history) {
            this.setData({
                history: JSON.parse(history)
            })
            console.log(this.data.history);
        }
    }
})