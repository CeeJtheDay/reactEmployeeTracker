const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");
// const employeeRoutes = express.Router();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
app.use(routes);
// require("./routes/api-routes")(app);
// require("./routes/html-routes")(app);
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:Password1@ds033767.mlab.com:33767/heroku_vd5fdbf6", {
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
