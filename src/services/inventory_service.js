const Order = require("../models/order_model");
const enums = require("../enums/controllers_enums");
const LOG = require("../../controller_log");

const createOrder = async (req, res) => {
  if (req.body) {
    const order = new Order(req.body);
    await order
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
        LOG.info(enums.order.CREATE_SUCCESS);
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
        LOG.info(enums.order.CREATE_ERROR);
      });
  }
};

const viewOrderByCustomerId = async (req, res) => {
  await Order.find({ customerId: req.params.id })
    .then((data) => {
      res.status(200).send({ data: data });
      LOG.info(enums.order.VIEW_SUCCESS);
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
      LOG.info(enums.order.VIEW_UNSUCCESS);
    });
};

const viewOrderById = async (req, res) => {
  if (req.params && req.params.id) {
    await Order.findById(req.params.id)
      .then((data) => {
        res.status(200).send({ data: data });
        LOG.info(enums.order.VIEW_SUCCESS);
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
        LOG.info(enums.order.VIEW_UNSUCCESS);
      });
  }
};

// const updateInventory = async (req, res) => {
//   if (!req.is("application/json")) {
//     res.send(400);
//   } else {
//     Inventory.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           itemName: req.body.itemName,

//         },
//       },
//       { upsert: true },
//       function (err, result) {
//         if (err) {
//           res.status(500).send(body);
//           LOG.info(enums.inventory.UPDATED_ERROR);
//         } else {
//           res.status(200).send(result);
//           LOG.info(enums.inventory.UPDATED_SUCCESS);
//         }
//       }
//     );
//   }
// };

const deleteOrder = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  await Order.findByIdAndDelete(req.params.id)
    .then((response) => {
      res.status(200).send(response);
      LOG.info(enums.order.DELETE_SUCCESS);
    })
    .catch((err) => {
      res.status(500).send(err.message);
      LOG.info(enums.order.DELETE_ERROR);
    });
};

module.exports = {
  createOrder,
  viewOrderByCustomerId,
  viewOrderById,
  // updateInventory,
  deleteOrder,
};
