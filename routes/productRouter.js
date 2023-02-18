const express = require("express");
const {createProduct, updateProduct, getaProduct, deleteProduct, getAllProduct,} = require("../controller/productCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/",authMiddleware , isAdmin, createProduct);
router.put("/:id",authMiddleware , isAdmin, updateProduct);
router.get("/:id", getaProduct);
router.get("/", getAllProduct);
router.delete("/:id",authMiddleware , isAdmin, deleteProduct);



module.exports = router;