// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
background: ['http://p1.music.126.net/Rhvo3NdOwvUQcMmuMJIeDg==/109951169992261002.jpg?imageView&amp;quality=89','http://p1.music.126.net/0N7Zvp5gkc-gya9oFJLXAA==/109951169992175421.jpg?imageView&amp;quality=89','http://p1.music.126.net/0N7Zvp5gkc-gya9oFJLXAA==/109951169992175421.jpg?imageView&amp;quality=89'],
musiclist:[
  {"src":"https://p1.music.126.net/oS8rEBSySMUXRxxJ-T5IDQ==/109951163622416381.jpg?param=130y130",
  "musicName":"为你写诗",
  "name":"孙笑川",
  "id":"1320100071"
},
{"src":"https://p2.music.126.net/KhpVlOCtlS8AdVNTzDeKlQ==/109951165946394732.jpg?param=130y130",
"musicName":"yan",
"name":"孙笑川",
"id":"1341323866"
}
]
  },
play:function(ev){
  console.log("jump")
 var mid=ev.currentTarget.dataset.id
  wx.navigateTo({
    url:'/pages/play/play?id='+mid,
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
console.log("loading")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})