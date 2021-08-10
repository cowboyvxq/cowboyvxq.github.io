// 引入node这种的express框架
const express = require("express");

// 引入node自带的path模块
const path = require("path");

// 创建app对象
const app = express();

// 引入body.parse模块
var bodyParser = require('body-parser');
 
// 创建 application/x-www-form-urlencoded 编码解析
app.use( bodyParser.urlencoded({ extended: false })  );

// 创建 application/json 编码解析
app.use( bodyParser.json() );

// 创建静态资源目录
app.use( express.static( path.join(__dirname , "public" ) ) );


app.get("/get01",function( req, res ){
    res.send("这是s1服务器get01返回的字符串数据");
});


// 指定服务器的端口号为3001
app.listen( 3001 );

// 控制输出提示信息
console.log("恭喜你,端口3001服务器启动成功!!!");