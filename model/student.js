const mongoose = require("mongoose");

//创建集合规则
const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20
  },
  password: {
    type: Number,
  },
  stuId: {
    type: String,
    // 如果unique 为true  可以保证学号不重复
    unique: true,
  },
  tel: {
    type: String,
    required: true
  },
  sex: {
    // 0代表男 1代表女
    type: Number,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  profession: {
    // 专业  
    type: String,
  },
  classId: {
    type: Number,
  }

})

// 使用集合规则创建用户集合
// 第一个是集合名，第二个是提前定义好的集合规则
const Student = mongoose.model("student", studentSchema);


// 测试代码  第二次执行会报错 

// Student.create({
//   username: '冯崛',
//   password: 1,
//   stuId: '123123123',
//   tel: '122223',
//   sex: 0,
//   age: 18,
//   profession: '软件',
//   classId: 1,
// }).then(() => {
//   console.log("学生集合创建成功");
// }).catch((err) => {
//   console.log(err);
// })

//  导出student 用来操作数据库
module.exports = {
  Student
}