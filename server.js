const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static("public"));

// Routes
require("./routes/api-routes")(app);
// require("./routes/html-routes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/employees", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB database connection established successfully");
})

app.listen(PORT, () => {
  console.log(`App listening on: 'http://localhost:${PORT}'`);
});
