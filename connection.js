const mongoose = require("mongoose");
const BusRoute = require("./models/busroute");
const request = require("request");

//ES6 Promises
mongoose.Promise = global.Promise;

//Connect to db before test run

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/busdata", {
  useNewUrlParser: true
});

mongoose.connection
  .once("open", () => {
    console.log("Connection has been made...");
  })
  .on("error", err => {
    console.log("Connection Error:", err);
  });

let skip = 0;

var options = {
  method: "GET",
  url:
    "http://datamall2.mytransport.sg/ltaodataservice/BusRoutes?$skip=" + skip,
  headers: {
    accept: "application/json",
    AccountKey: "xGVgRkvQRJK7Mr6RGYiLLQ=="
  }
};

for (var i = 0; i < 50; i++, skip+=500) {
    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        BusRoute.insertMany(JSON.parse(body).value, docs => {
            console.log("Docs inserted successfully" + skip);
        });
    });
}

