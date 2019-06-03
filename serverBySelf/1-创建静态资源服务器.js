//导包
const fs = require('fs')
const path = require('path')
const http = require('http')
//创建服务器
const server = http.createServer((req, res) => {
    const url = req.url == '/' ? '/index.html' : req.url
    console.log(url);
    
    //创建绝对路径
    const filePath = path.join(__dirname, 'files', url)
    //读取请求路径下的文件
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.end('<h1>404 Not Found</h1>')
        } else {
            res.end(data)

        }
    })
})

//配置服务器

//开启监听
server.listen(3000, () => {
    console.log('success');
    
})