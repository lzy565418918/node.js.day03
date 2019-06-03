const express = require("express");
const app = express();
app.get("/", function(req, res) {
  res.send("For you");
});


app.get("/search", function(req, res) {
  res.send("Love you");
});
//注册后端路由：
app.get("/category_search", function(req, res) {
  const cateData = [
    {
      id: 1,
      name: "唱歌",
      slug: "sing"
    },
    {
      id: 2,
      name: "跳舞",
      slug: "dancing"
    }
  ];
  const jsonData=JSON.stringify(cateData)
  res.send(jsonData);
});



app.listen(3015, () => {
  console.log("start");
});