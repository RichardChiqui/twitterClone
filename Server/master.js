const express = require('express')

const app = express()
app.listen(3000,()=>console.log("PORT is all setup 3000"))


app.get("/username", (req, res) => {
    console.log(req);
  });