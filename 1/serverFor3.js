

var http = require('http');
var fs = require('fs');
// 引入文件读取模块

// console.log(dirname)
var documentRoot = 'F:/个人/study/Node/test/demo1';
// 需要访问文件的存放目录

var server = http.createServer( function (req, res) {

    var url = req.url;
    /*
    * 客户输入的 url,
    * 例如: 如果输入的是 localhost:8888/index.html
    * 那么这里的 url = /index.html
    * */

    var file = documentRoot + url;

    console.log( url, 111 )

    fs.readFile( file, function (err, data) {
        console.log( err, 222 )
        console.log( data, 333 )
        /*
        * 一参为文件路径
        * 二参为回调函数
        *   回调函数:
        *       一参为读取错误返回的信息, 返回空 就没有错误
        *       二参为读取成功后返回的文本内容
        * */

        if (err) {
            res.writeHead( 404, {
                'Content-Type': ' text/html;charset="utf-8" '
            } );

            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>')
            res.end();
        } else {

            res.writeHead( 200, {
                'Content-Type': ' text/html;charset="utf-8" '
            } );
            res.write( data );  // 将 index.html 显示在 客户端
            res.end();
        }

    } );

} ).listen( 8888 );

console.log('服务器开启成功');
