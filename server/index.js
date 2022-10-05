const express = require('express');
const {signUp, logIn, saveToDo, fetchLogIn} = require('../db/index.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

// get
app.get('/saved', (req, res) => {
  let username = req.body;
  return fetchLogIn(username)
  .then((data)=>{
    res.status(200).send(data);
  }).catch((err)=>{
    res.status(500).send(err);
  })
});

// post
app.post('/signup', (req, res) => {
  let obj = req.body;
  console.log('signup',obj);
  return signUp(obj)
  .then((promise)=>{
    res.status(201).send('signup complete');
  }).catch((err)=>{
    res.status(500).send(err);
  });
});

app.post('/login', (req, res) => {
  let obj = req.body;
  console.log('login',obj);
  return logIn(obj)
  .then((data)=>{
    if (data.length === 0) {
      res.status(500).send('INVALID INFO');
    } else {
      res.status(201).send('login success!');
    }
  }).catch((err)=>{
    res.status(500).send(err);
  })
});

app.post('/save-to-do-list', (req, res) => {
  let arr = req.body;
  return saveToDo(arr)
  .then((data)=>{
    res.status(201).send('saved to do list');
  }).catch((err)=>{
    res.status(500).send(err);
  })
});


let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});