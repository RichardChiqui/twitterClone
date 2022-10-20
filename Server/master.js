const express = require('express')

const app = express()
app.listen(3001,()=>console.log("PORT is all setup 3001"))
app.use(express.static('test'))

app.get("/api", (req, res) => {
    res.json({ message: "Hello from Express!" });
  });