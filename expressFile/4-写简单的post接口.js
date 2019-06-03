//导包
const express = require('express')
const app = express()

var bodyParser = require('body-parser')

// create application/x-www-form-urlencoded parser
// 这是普通的请求头，后面会写传文件的接口，formdata
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})


//写post接口
app.post('/login', urlencodedParser, (req, res) => {
        //获取请求参数name和pwd
        //解构
        const {
            name,
            pwd
        } = req.body
        //写一组返回数据backData并判断
        if (req.body.name == '' || req.body.pwd == '') {
            const backData = {
                code: 400,
                msg: '注册失败'

            }
            //返回数据
            res.send(backData)

        } else {
            const backData = {
                code: 200,
                msg: '注册成功'

            }
            //返回数据
            res.send(backData)

        }
    })




app.listen(3000, () => {
    console.log('success');

})