// Configuring the database
var express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");
const debug = require("debug")("test-master");

const name = "Test Masters";

var mongodb_connection_string = "mongodb://localhost:27017/TestMasters";

if (process.env.OPENSHIFT_MONGODB_DB_URL) {
  mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL + db_name;
}

debug("booting %s", name);

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

require("./routes/card.routes.js")(app);
require("./routes/cardset.routes.js")(app);
require("./routes/course.routes.js")(app);

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 4000;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

app.listen(server_port, server_ip_address, () => {
  console.log(
    "Server listening on " + server_port + ", port" + server_ip_address
  );
});

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(mongodb_connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
