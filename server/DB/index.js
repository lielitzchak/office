const mongoose = require("mongoose");
mongoose
  .connect(process.env.STRING_CONNECTIONS, {
    UseNewUrlParser: true,
    useunifiedtopology: true,
  })
  .then(() => console.log("connected"))
  .catch((er) => console.log(er));
module.exports = mongoose.connection;
 