
var order = ['red', 'yellow', 'blue', 'green', 'red']
var app = getApp();

// pages/list/index.js
Page({

  data: {
    toView: 'red',
    scrollTop: 100,
    list: null
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.serverUrl + "/book/list",
      method: "get",
      data: {},
      success: function (res) {
        console.log(res.data);
        var list = res.data.data;
        if (res.data.success && list != null) {
          that.setData({
            list: list
          })
        } else {
          var toastText = "获取数据失败";
          wx.showToast({
            title: toastText,
            icon: "none",
            duration: 2000
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 扫描二维码或条形码，识别图书
   */
  scanBookCode: function (event) {
    console.log('scanning...')
    wx.scanCode({
      onlyFromCamera: true,
      scanType: [],
      success: function (res) {
        console.log(res);
        wx.redirectTo({
          url: './detail/index?result=' + res.result,
        })
      },
      fail: function (res) {

      },
      complete: function (res) {

      },
    })
  },
  /**
   * 查看某本书的详情
   */
  viewDetail: function (event) {
    console.log("")
    wx.redirectTo({
      url: './detail/index?bookId=' + event.target.dataset.itemId,
    })
  }
})