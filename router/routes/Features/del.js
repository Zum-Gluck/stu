const { Student } = require("../../../model/student")
module.exports = async (req, res) => {
  const { id } = req.query

  await Student.findOneAndDelete({ _id: id });

  // 重定向到用户列表页面 
  res.redirect('/router/show?classId=1');
}