//导包
var express = require('express')
//用multer可以接收formData类型的文件 数据
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
 
var app = express()
 
//注册后端路由，地址是/profile ,方法是post，参数是avatar
app.post('/picture', upload.single('img'), function (req, res, next) {
  // req.file is the `img` file(req.file 是 `img` 文件的信息)
 
  // req.body will hold the text fields, if there were any（req.body 将具有文本域数据，如果存在的话）

 res.send('hl')
})

//开启服务器
app.listen(3000, () => {
  console.log('success');
  
})