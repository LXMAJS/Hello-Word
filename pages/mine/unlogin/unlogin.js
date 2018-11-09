// pages/mine/unlogin/unlogin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

 /**
  * 处理登录相关的事情
  */
  doLogin : function(e) {
    console.log(e.detail.message);
    console.log(e.detail.userInfo);
    console.log(e.detail.rawData);

    wx.login({
      success: function(res) {
        console.log(res);
        // 获取用户的临时登录凭证
        var code = res.code;
        // 调用后端，获取微信的session_key, secret
        wx.request({
          url: "http://127.0.0.1:8082/library" + "/user/wxlogin" + "?code=" + code,
          method: "POST",
          success: function(result) {
            console.log("login successed!!!");
            app.setGlobalUserInfo(e.detail.userInfo);
            wx.redirectTo({
              url: '../index',
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  }
})