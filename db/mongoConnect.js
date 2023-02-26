const mongoose = require('mongoose');
const {config} = require("../config/secret")

main().catch(err => console.log(err));

async function main() {
  // await mongoose.connect('mongodb://localhost:27017/idf77');
  await mongoose.connect(`mongodb+srv://${config.userDB}:${config.userPass}@cluster0.jqikq.mongodb.net/idf7b`);
  console.log("mongo connect idf 7b atlas");
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}