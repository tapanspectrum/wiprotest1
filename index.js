const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//middleware 
app.use(bodyParser.json());
app.use(express.json({ limit: '10mb' }));

// const variable
const port = 3000;
const changeData = require('./replacechar');

app.post("/", (req, res) => {
  let payload = req.body.payload;
  payload.value.map(changeData);
  res.send(payload);
});

app.listen(port, () => {
  console.log(`Server start with port ${port}`);
});
