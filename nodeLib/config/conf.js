/**	
 *  基本配置参数
 **/
exports.CONF = {
    root :"D:\\", //服务器索引的根目录，可配置为任意本地地址
    welcome: "",    //使用欢迎页面的文件名，为空时，表示不使用欢迎页面
    notFound: __dirname + "/../html/404.html",      //访问的资源不存在是，跳转的页面配置
    folder: __dirname + "/../html/folder.html",     //显示文件夹列表时候的配置页面
    handle: true,       //是否使用服务器模板引擎
    middleware: true,   //中间件支持, LESS/CoffeeScript 等支持
    debug: true,        //是否对js以及css文件进行简单压缩，debug:true表示不压缩
    fs_mod: true,       //是否支持文件夹列表展示
    port: 80,           //服务器监听端口
    maxConnections: 1000,    //并发处理的最大连接数
    runJs : true,
    output: "c:\\output\\",
    'nginx-http-concat':true,
    agent : {
        get:function(path){
            for (var i = 0; i < this.map.length; i++) {
                if( this.map[i].reg.test(path) ){
                    return this.map[i]
                } 
            }
        },
        map:[
            {
                reg : /static/,
                host: 'localhost',
                port: 2850,
                path: function(url){
                    return url.path;
                }
            },
            {
                reg:/xuan/, //路径中若含有xuan字段且映射不到内容，获取远程数据
                host:'xuan.news.cn',
                path:function(url){
                    return '';
                }
            }
        ]
    },
    expires : 0     //服务端缓存时间设置
};

exports.staticConf = {          //不要修改
    root: "",       
    welcome: "",
    notFound: __dirname + "/../html/404.html",
    folder: __dirname + "/../html/folder.html",
    handle: true,
    middleware: true,   //中间件支持, LESS/CoffeeScript 等支持
    debug: false,
    fs_mod: true,
    port: 2850,
    maxConnections: 1000,    //并发处理的最大连接数
    runJs : true,
    output: "c:\\output\\",
    agent : {
        get:function(path){
            return /baidu/.test(path) ?{
                reg : /baidu/,
                host: 'www.baidu.com',
                port: 80,
                path: function(url){
                    return '';
                }
            } : undefined
        }
    },
    expires : 1000*60*60*24     //服务端缓存时间设置
};