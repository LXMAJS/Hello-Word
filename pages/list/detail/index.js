// pages/list/detail/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookId: "00000"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.bookId = "11";
    console.log('options: ' + options.bookId);
    console.log('data.bookId: ' + this.data.bookId);
    var bookId = this.data.bookId;
    wx.request({
      url: app.globalData.serverUrl + "/book/getbyid",
      data:{
        "bookId": bookId
      },
      method: "GET",
      success: function(res) {
        console.log(res);
        console.log(res.data);
        if(!res.data.success){
          var toastText = res.data.msg;
          wx.showToast({
            title: toastText,
            icon: "",
            duration: 2000
          });
        } else {

        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    this.result = '222222s'
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    this.result = '333333'
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

  }
})