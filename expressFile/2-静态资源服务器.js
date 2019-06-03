const express = require('express')
const app = express()
//通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了
app.use(express.static('public'))

app.listen(3000, () => console.log('success'))