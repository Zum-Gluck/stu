const { Student } = require("../../../model/student")

module.exports = async (req, res) => {
  let classId = req.query.classId

  let info = await Student.find({ classId })
  res.render("show.art", {
    info,
    classId
  })
}