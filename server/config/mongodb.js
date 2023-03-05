const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(
      "mongodb+srv://tuannguyen:tuan2002@cluster0.ftbyaom.mongodb.net/?retryWrites=true&w=majority",
    );
    console.log("database connect");
  } catch (err) {
    console.log("data connect err");
  }
};
module.exports = dbConnect;
