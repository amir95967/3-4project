const mongoose = require('mongoose');
const {config} = require("../config/secret")

main().catch(err => console.log(err));

async function main() {
  mongoose.set('strictQuery', false);
  await mongoose.connect(`mongodb+srv://${config.mongoUser}:${config.mongoPass}@cluster0.mvlfz3g.mongodb.net/apiprojectt`);
  // await mongoose.connect('mongodb://127.0.0.1:27017/fullstack23');
  console.log("mongo connect apiproject ");
}