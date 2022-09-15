const express = require("express");
const mongoose = require("mongoose");

ObjectId = mongoose.Schema.ObjectId;

const transactionSchema = new mongoose.Schema({
  user: {
    // type:mongoose.Schema.Types.ObjectId,
    type:ObjectId,
    required: true,
    ref: "userData",
  },
  status: {
    type: String,
    enum: ["success", "failed"],
    default: "success",
  },
  amount: {
    type: Number,
    required: true,
  },
});

const transaction = new mongoose.model("transaction", transactionSchema);
module.exports = transaction;
