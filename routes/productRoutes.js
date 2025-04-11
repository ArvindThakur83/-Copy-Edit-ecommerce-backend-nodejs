const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  searchProducts,
} = require("../controller/productController");
const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");
const upload = require("../middleware/uploadMiddleware");

router.post("/create", protect, upload.array("images"), createProduct);
router.get("/", protect, getProducts);
router.put("/:id", protect, updateProduct);
router.delete("/:id", protect, deleteProduct);
router.get("/search", protect, searchProducts);

module.exports = router;
