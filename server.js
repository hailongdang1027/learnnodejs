const express = require('express');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3004;
const hostname = process.env.HOST_NAME;



app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get("/ren", (req, res) => {
  res.render('index.ejs');
});

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(port, hostname, () => {
  console.log(`Express server running at http://${hostname}:${port}/`);
});