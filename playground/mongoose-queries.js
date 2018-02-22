const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");
const { ObjectID } = require("mongodb");

let id = "5a8f049a814b48f90b5aac05";

if (!ObjectID.isValid(id)) {
  console.log("ID not valid");
}

//
// User.find({ _id: id }).then(todos => console.log("Todos", todos));
//
// User.findOne({ _id: id }).then(todo => console.log("Todo", todo));
//
User.findById(id)
  .then(
    user =>
      !user ? console.log("Id not found") : console.log("User By Id", user)
  )
  .catch(e => console.log(e));
