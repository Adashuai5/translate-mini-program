//index.js
import {
  translate
} from '../../utils/api.js'
const app = getApp()

Page({
  data: {
    query: '',
    hideCloseIcon: true,
    translation: [],
    curLang: {},
  },
  onShow() {
    if (this.data.curLang.lang !== app.globalData.curLang.lang) {
      this.setData({
        curLang: app.globalData.curLang
      })
      this.onConfirm()
    }
  },
  onInput(e) {
    this.setData({
      'query': e.detail.value
    })
    if (this.data.query.length > 0) {
      this.setData({
        hideCloseIcon: false
      })
    } else {
      this.setData({
        hideCloseIcon: true
      })
    }
  },
  onTapClose() {
    this.setData({
      hideCloseIcon: true,
      query: '',
      translation: ''
    })
  },
  onConfirm() {
    if (!this.data.query) {
      return
    }
    translate(this.data.query, {
      from: 'auto',
      to: this.data.curLang.lang
    }).then((res) => {
      this.setData({
        translation: res.trans_result
      })
    })
  }
})