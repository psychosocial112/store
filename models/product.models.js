const mongoose = require("mongoose");
const slug = require("slug");
const ProductSchema = new mongoose.Schema(
    {
        Image: { type: String },
        title: { type: String },
        slug: { type: String },
        description: { type: String },
        price: { type: Number, min: 0 },
        isPromotion: { type: Boolean, default: false },
        promotionPrice: { type: Number, min: 0 },
        reference: { type: String },
        category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    },
    { timestamps: true }
);

ProductSchema.pre("validate", function (next) {
    if (!this.slug) {
        slugify();
    }
    next();
});

ProductSchema.method.slugify = function () {
    this.slug =
        slug(this.title) + ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
};

module.exports = mongoose.model("Product", ProductSchema);
