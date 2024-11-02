Page({
  data: {
    // 懒加载
    ec: {
      lazyLoad: true,
    },
  },
  onLoad() {},
  onReady() {
  },
  // 进入首页
  navToHome() {
    wx.redirectTo({
      url: "/pages/home/home",
    });
  }
});
