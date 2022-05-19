const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const orderApi = require("./src/controllers/order_controller");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8081;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log("Database error", error.message);
    }
  }
);

mongoose.connection.once("open", () => {
  console.log("Database Synced");
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});

app.route("/").get((req, res) => {
  res.send("Order Management Application Backend");
});

app.use("/order", orderApi());

/* 
Step 1 : Create server side project
Step 2 : Put docker file 
Step 3 : Build-deploy.yaml CI part -> Gen token from docker Hub
Step 4 : Deploy -> created an image
Step 5 : Created deploy and service yaml 
Step 6 : Create google cluster
Step 7 : In k8s folder execute the code from g-cloud and ran "kubectl create -f ."
Step 8 : "kubectl get pods" to check pods status
Step 9 : "kubectl get svc" to get external IP
Step 10 : Make CD part in build-deploy.yaml -> needed JSON token and env data 
Step 11 : Pushed to git to run
*/
