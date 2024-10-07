// pages/play/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
musicId:"12345",
action:{
  "method":"play"
}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
var mid=options.id
this.setData({
  musicId:mid
})
  },
playdate:function(){
  console.log(this.data.action.method)
  var date=this.data.action.method
  if(date="play"){
  this.setData(
    {
      action:{
        "method":"pause"
      }
    }
  )
}else{
  this.setData(
    {
      action:{
        "method":"play"
      }
    }
  )
}
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