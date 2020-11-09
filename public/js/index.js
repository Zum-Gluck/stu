// 1.1 jQuery 懒加载，作用是让页面的html结构加载完全之后再执行jQuery代码
$(function () {
  // 通过封装了 jquery验证码组件
  $('#mpanel1').codeVerify({
    type: 1,
    width: '80px',
    height: '30px',
    fontSize: '14px',
    codeLength: 4,
    btnId: 'login',
    ready: function () {
      $("form").on("submit", function () {
        return true
      })
    },
    success: function () {
      document.myform.submit()
      $("form").on("submit", function () {
        let result = {}

        let arr = $("#form_login").serializeArray()
        arr.forEach(item => { //把获取到的数据转为对象
          result[item.name] = item.value
        });
        let { username, password } = result
        if (username.trim() === '' || password.trim() == '') { // 验证不通过
          alert("输入不能为空")
          return false
        }
      })
    },
    error: function () {
      alert("验证码输入错误")
      $("form").on("submit", function (event) {
        event.preventDefault()
      })
    }
  });
  // 动态设置验证码样式
  $('.varify-input-code').attr('placeholder', '验证码');
  $('.varify-input-code').css('text-indent', '10px');
});
