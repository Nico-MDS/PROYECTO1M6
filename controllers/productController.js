// controllers/productController.js
const Product = require('../models/productModel');

// POST /api/product/create
const createProduct = async (req, res) => {
  const { programType, price } = req.body;

  if (!programType || !price) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  try {
    const newProduct = await Product.create({
      programType,
      price,
      user: req.user._id, // Asocia automáticamente al usuario autenticado
    });

    return res.status(201).json({
      message: 'Compra registrada con éxito',
      product: newProduct,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear el producto', error: error.message });
  }
};

// GET /api/product/readall
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('user', 'email');
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener productos', error: error.message });
  }
};

// GET /api/product/readone/:id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('user', 'email');
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: 'Error al buscar el producto', error: error.message });
  }
};

// PUT /api/product/update/:id
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });

    // Verificar si el usuario que intenta editar es el dueño
    if (product.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'No autorizado para editar este producto' });
    }

    const { programType, price } = req.body;
    if (programType) product.programType = programType;
    if (price) product.price = price;

    const updated = await product.save();
    return res.status(200).json({ message: 'Producto actualizado', product: updated });

  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar el producto', error: error.message });
  }
};

// DELETE /api/product/delete/:id
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });

    if (product.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'No autorizado para eliminar este producto' });
    }

    await product.deleteOne();
    return res.status(200).json({ message: 'Producto eliminado' });

  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar el producto', error: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
