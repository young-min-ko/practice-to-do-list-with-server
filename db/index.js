const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/practice');

let somethingSchema = mongoose.Schema({
  to_do: String,
  done: Boolean,
  username: String,
});

let humanSchema = mongoose.Schema({
  username: {type: String, unique: true},
  password: String
  // salt: String;
})

let ToDo = mongoose.model('ToDo', somethingSchema);
let Human = mongoose.model('Human', humanSchema);

let signUp = (obj) => {
  return Human.create(obj);
  // .then(()=>{}).catch((err)=>(err));
};

let logIn = (obj) => {
  return Human.find(obj);
  // .then((data)=>(data)).catch((err)=>(err));
};

let saveToDo = (arr) => {
  return ToDo.collection.insertMany(arr);
};

let fetchLogIn = (obj) => {
  return ToDo.find(obj);
};

module.exports.signUp = signUp;
module.exports.logIn = logIn;
module.exports.saveToDo = saveToDo;
module.exports.fetchLogIn =fetchLogIn;