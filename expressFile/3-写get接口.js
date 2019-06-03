const express = require('express')
const app = express()
//写get类型，无参数的接口
//这是最简单的
//写一个接口地址/api/joke,由于不要请求参数所以req不用管，
//也叫做后端路由
app.get('/api/joke', (req, res) => {
    //手动写一个返回的数据
    const backData = {
        msg: 200,
        joke: '从前有一只鬼，他把自己笑死了哈哈哈哈...'
    }
    //把这个数据返回
    res.send(backData)
})

//写一个get类型（根据英雄姓名，查询英雄的简略信息），有参数为name的接口
//也叫做后端路由
app.get('/api/hero/info', (req, res) => {
    //参数为get
    //用解构来接收一下
    // req.query 此属性是一个对象，包含路由中每个查询字符串参数的属性。如果没有查询字符串，则为空对象{}
    //下面这行代码表示
    const {
        name
    } = req.query
    
    //自己写一个返回的数据,并判断一下
    if (name == '提莫') {
        //返回的数据
        const backData = {
            title: '迅捷斥候',
            name,
            story: `团战可以输，${name}必须死`
        }
        res.send(backData)

    } else {
        //返回的数据
        const backData = {
            code: 400,
            msg: `没有找到${name} 请重新输入`
        }
        res.send(backData)

    }
})


app.listen(3000, () => console.log('success'))