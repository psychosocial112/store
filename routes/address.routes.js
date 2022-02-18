const {
    getAddress,
    getAddresses,
    deleteAddress,
    updateAddress,
} = require("../controllers/address.controllers");

const router = require("express").Router();

router.get("/", getAddresses);
router.get("/:addressId", getAddress);
router.delete("/:addressId", deleteAddress);
router.put("/:addressId", updateAddress);

module.exports = router;
