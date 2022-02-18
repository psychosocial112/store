const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
    {
        street: { type: Number },
        city: { type: String },
        country: { type: Number },
        zipCode: { type: Number },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Address", AddressSchema);
