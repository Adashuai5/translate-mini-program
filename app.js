//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    this.globalData.curLang = wx.getStorageSync('curLang') || this.globalData.langList[0]
  },
  globalData: {
    curLang: {},
    langList: [{
        'name': '英文',
        'lang': 'en',
        'index': 0
      },
      {
        'name': '德语',
        'lang': 'de',
        'index': 1
      },
      {
        'name': '日语',
        'lang': 'jp',
        'index': 2
      },
      {
        'name': '韩语',
        'lang': 'kor',
        'index': 3
      },
      {
        'name': '法语',
        'lang': 'fra',
        'index': 4
      },
      {
        'name': '西班牙语',
        'lang': 'spa',
        'index': 5
      },
      {
        'name': '泰语',
        'lang': 'th',
        'index': 6
      },
      {
        'name': '越南语',
        'lang': 'vie',
        'index': 7
      },
      {
        'name': '中文',
        'lang': 'zh',
        'index': 8
      },
      {
        'name': '粤语',
        'lang': 'yue',
        'index': 9
      }
    ]
  }
})