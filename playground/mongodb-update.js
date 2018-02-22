// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }

  db
    .collection("Users")
    .findOneAndUpdate(
      { _id: new ObjectID("5a8e0f65aa52c82326b11b87") },
      {
        $set: {
          name: "glugz"
        },
        $inc: {
          age: -2
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(res => console.log(res));

  // db.close();
});
