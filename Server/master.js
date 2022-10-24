const express = require('express')

const app = express()
app.listen(3030,()=>console.log("PORT is all setup 3030"))
app.use(express.json({limit: '1mb'}))

const arr = []


app.post("/username", (req, res) => {
  console.log("I got a post request")
  res({
    status:"test trial"
  })
  arr.push(req)
  
  });

  app.get("/api", (req, res) => {
    console.log("I got a api request")
      console.log(req.body);
      res.json({
        status:"test trial"
      })
      arr.push(req)
    });
  

  