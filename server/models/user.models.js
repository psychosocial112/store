const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        email: {
            type: String,
            unique: true,
            index: true,
            lowercase: true,
            required: true,
        },
        password: { type: String },
        address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
        isAdmin: { type: Boolean, default: false },
        cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
    },
    { timestamps: true },
);
module.exports = mongoose.model("User", UserSchema);