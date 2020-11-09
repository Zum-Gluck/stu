module.exports = async (req, res) => {
  const { Student } = require("../../../model/student")
  // 解构出输入的学号与密码
  const { username, password } = req.body

  if (username.trim().length == 0 || password.trim().length == 0) {
    res.send("账号或密码不能为空")
  }

  let result = await Student.findOne({ username });
  if (result) {
    if (password == result.password) {
      //  req.session 是由第三方模块 session 提供的
      req.session.username = result.username;
      // 把用户角色状态存储在session中 
      req.session.role = result.role;
      // locals 中的属性  所有模板文件都可以直接访问
      req.app.locals.userinfo = result;

      res.redirect("/router/show?classId=1")
    } else {
      // 密码错误
      res.send("密码错误")
    }
  } else {
    // 没有这个账号
    res.send('没有这个账号')
  }

}