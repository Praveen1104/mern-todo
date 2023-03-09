const mongoose = require("mongoose");

module.exports = mongoose
  .connect(
    "mongodb+srv://prav:prav@crud.2hlfdx2.mongodb.net/fb?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected");
    }
  });
mongoose.connection.once("open", () => {
  console.log("connecting");
});
