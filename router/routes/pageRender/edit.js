const { Student } = require("../../../model/student")

module.exports = async (req, res) => {

  let id = req.query.id;
  let classId = req.query.classId;

  if (id) { //id存在说明是添加操作
    let info = await Student.findOne({ _id: id });

    res.render("edit.art", {
      info,
      link: `/router/modify?id=${id}&classId=${classId}`,
      msg:"编辑",
    })

  } else {
    res.render("edit.art", {
      link: "/router/add",
      msg:"添加",
    })

  }
} 