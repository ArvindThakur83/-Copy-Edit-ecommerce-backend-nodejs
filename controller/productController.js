const Product = require("../models/product");

exports.createProduct = async (req, res) => {
  try {
    const images = req.files.map(file => file.path || file.filename);
    const product = await Product.create({
      ...req.body,
      images,
      user: req.user.id,
    });
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const { name, category, page = 1, limit = 10 } = req.query;
    const query = { user: req.user.id };

    if (name) query.name = { $regex: name, $options: "i" };
    if (category) query.category = category;

    const products = await Product.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updateData = { ...req.body };

    // Handle updated images if files are uploaded
    if (req.files && req.files.length > 0) {
      updateData.images = req.files.map(file => file.path || file.filename);
    }

    const product = await Product.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      updateData,
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.searchProducts = async (req, res) => {
  try {
    const { query, category } = req.query;

    const searchQuery = {
      user: req.user.id,
    };

    if (query) {
      searchQuery.name = { $regex: query, $options: "i" };
    }

    if (category) {
      searchQuery.category = category;
    }

    const products = await Product.find(searchQuery);
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
