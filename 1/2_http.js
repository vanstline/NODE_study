
var http = require('http');
// 引入 http 模块

// 开启服务, 监听 8888 端口

var server = http.createServer( function ( req, res ) {

    /*
    * req => request   用来接受客户端数据
    * res => response  用来向客户端发送服务器数据
    * */

    console.log( '有客户连接' ) ; // 创建连接成功显示在后台

    //  一参是 http 请求状态, 200 连接成功
    //  连接成功后系那个客户端写入头信息

    res.writeHead( 200, {
        'Content-Type': 'text/html; charset="utf-8"'
    } );

    res.write( '这是正文部分' );  // 显示给客户端
    res.end();

} ).listen( 8888 );

console.log( '服务器开启成功' );