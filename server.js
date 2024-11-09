require('dotenv').config()
const express = require('express');

const webRoutes = require('./src/routes/route');

const configViewEngine = require('./src/config/viewEngine');
const connection = require('./src/config/database');
const app = express();
const port = process.env.PORT || 3004;
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

configViewEngine(app);

app.use('/', webRoutes);

// connection.query('Select * from "usersInfo"."user"', (err, res) => {
//   if (!err) {
//       console.log(res.rows);
//   }else{
//       console.log(err.message);
//   }
//   connection.end;
// })

app.listen(port, hostname, () => {
  console.log(`Express server running at http://${hostname}:${port}/`);
});