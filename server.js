const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const BusStop = require("./models/busstop");
const request = require("request");

const port = 5000;

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/busdata", {
  useNewUrlParser: true
});

let distance = (lat1, lon1, lat2, lon2) => {
  let R = 6371; // km (change this constant to get miles)
  let dLat = ((lat2 - lat1) * Math.PI) / 180;
  let dLon = ((lon2 - lon1) * Math.PI) / 180;
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;
  return Math.round(d * 1000);
};

mongoose.connection
  .once("open", () => {
    console.log("Connection has been made...");
  })
  .on("error", err => {
    console.log("Connection Error:", err);
  });

app.get("/api/busdata", (req, res) => {
  console.log(req.url);
  console.log(req.query.buscode);
  var options = {
    method: "GET",
    url: "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2",
    qs: { BusStopCode: req.query.buscode },
    headers: {
      accept: "application/json",
      AccountKey: "xGVgRkvQRJK7Mr6RGYiLLQ=="
    }
  };
  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    res.json(JSON.parse(body));
  });
});

app.get("/api/busname", (req, res) => {
  BusStop.find(
    { BusStopCode: req.query.buscode },
    "Description",
    (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        console.log(req.url);
        res.json(docs);
        console.log("Document retrieved successfully");
      }
    }
  );
});

app.get("/api/nearby", (req, res) => {
  BusStop.find({}, "BusStopCode Latitude Longitude", (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log(req.url);
      const userLat = req.query.userLat;
      const userLon = req.query.userLon;
      let resEnd = {};
      let nearbyArr = docs.filter(e => {
        return distance(userLat, userLon, e.Latitude, e.Longitude) < 400;
      });
      nearbyArr.map(e => {
        resEnd[e.BusStopCode] = distance(
          userLat,
          userLon,
          e.Latitude,
          e.Longitude
        );
      });
      res.json(resEnd);
    }
  });
});

app.get("/api/search", (req, res) => {
  BusStop.find();
});
app.listen(port, () => console.log(`Server running on port ${port}`));
