const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/inotebook"

// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("connected to DB"))
//     .catch(error => console.log(error))
// }

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to mongoDB successfully");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectToMongo;