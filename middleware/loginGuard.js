module.exports = (req, res, next) => {

  if (req.url != '/login' && !req.session.username) { // 判断访问的是不是登录页面
    res.redirect('/router/login');
  } else {
    next();
  }
}