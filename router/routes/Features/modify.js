const { Student } = require("../../../model/student")
module.exports = async (req, res) => {

  let id = req.query.id;

  const body = req.body

  let student = await Student.findOne({ _id: id });

  const { username, stuId, tel, sex, age, profession } = req.body;


  let result = await Student.updateOne({ _id: id }, { username, stuId, tel, sex, age, profession });

  res.redirect(`/router/show?classId=1` );
}