Page({
  data:{
    name: 'ada'
  },
  showToast(){
    wx.showToast({
      title: '失败',
      icon: 'loading',
      duration: 2000
    })
  }
})