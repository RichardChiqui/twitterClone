const express = require('express')

const app = express()
app.listen(3001,()=>console.log("PORT is all setup 3001"))


app.get("/username", (req, res) => {
    console.log(req);
  });