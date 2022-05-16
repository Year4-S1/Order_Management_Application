const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
const service = require("../services/order_service");

module.exports = function () {
  router.post("/create", service.createOrder);
  router.get("/view/supplier/:id", service.viewOrderByCustomerId);
  router.get("/view/:id", service.viewOrderById);
  router.put("/update/:id", service.updateOrder);
  router.delete("/delete/:id", service.deleteOrder);

  return router;
};
