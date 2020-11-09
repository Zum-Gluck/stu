const express = require("express")
const router = express.Router()

/***
 *  默认路由重定向到登录页
 */
router.get('/', (req, res) => res.redirect("/login"))

/**
 *  Render相关
 */
router.get("/login", require("./routes/pageRender/login"))      //------------渲染登录页
router.get("/show", require("./routes/pageRender/show"))        //------------渲染展示页
router.get("/edit", require("./routes/pageRender/edit"))        //------------渲染编辑页

/**
 *  Feature相关 
 */
router.post("/login", require("./routes/Features/login"))       //------------登录功能
router.get("/loginOut", require("./routes/Features/loginOut"))  //------------退出功能
router.get("/del", require("./routes/Features/del"))            // -----------删除功能
router.post("/modify", require("./routes/Features/modify"))     // -----------修改功能
router.post("/add", require("./routes/Features/add"))           // -----------增加功能

module.exports = router