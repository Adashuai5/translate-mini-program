//index.js

Page({
  data: {
    query: '',
    hideCloseIcon: true,
    translation: '',
    text: '英文',
  },
  onInput() {
    this.setData({
      hideCloseIcon: false
    })
  },
  onTapClose() {
    this.setData({
      hideCloseIcon: true,
      query: ''
    })
  }
})