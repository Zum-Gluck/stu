const { Student } = require("../../../model/student")
module.exports = async (req, res) => {
  Student.create(req.body);
  res.redirect(`/router/show?classId=1`)
}