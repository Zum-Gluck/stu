const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const session = require("express-session")

// 创建服务器&连接数据库
const app = express();
require("./model/connet")
require("./model/student")

/*** 
 *  ---------------------------------Config相关---------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  1.配置静态资源
 *  2.全局配置bodyParser
 *  3.全局配置session
 */
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'secret key' }));

/***
 *  ----------------------------------View相关-------------------------------------------
 * --------------------------------------------------------------------------------------
 *  1.所在位置
 *  2.默认后缀是
 *  3.模板引擎
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", 'art');
app.engine('art', require('express-art-template'))

/**
 * 请求拦截
 */
app.use("/router", require("./middleware/loginGuard"))

/***
 *  ----------------------------------Route相关 ---------------------------------------------
 * -----------------------------------------------------------------------------------------
 */
const router = require("./router")
app.use("/router", router)

app.listen(3000)
console.log("请访问http://localhost:3000/router/login");