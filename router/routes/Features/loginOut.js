module.exports = (req, res) => {
  req.session.destroy(function () {
    res.clearCookie('connect.sid');
    //重定向到登录页面
    res.redirect('/router/login')
    //清空userinfo
    req.app.locals.userinfo = null;
  })
}