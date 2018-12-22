//index.js
import { translate } from '../../utils/api.js'

Page({
  data: {
    query: '',
    hideCloseIcon: true,
    translation: [],
    text: '英文',
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
    if(!this.data.query){return}
    translate(this.data.query, { from: 'en', to: 'zh' }).then((res)=>{
      console.log(res)
      this.setData({ translation: res.trans_result })
    })
  }
})