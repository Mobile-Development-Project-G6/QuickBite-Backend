const CustomerOrder = require("../models/customerOrderModel");
const mongoose = require("mongoose");

exports.getOrders = async (req, res) => {
  try {
    let orders = await CustomerOrder.find({
      _id: req.params.id
    }).sort({ palced_time: "desc" });

    res.status(200).json({
      status: "Success",
      data: orders,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};