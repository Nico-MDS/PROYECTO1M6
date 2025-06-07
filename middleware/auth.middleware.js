// middleware/auth.middleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = async (req, res, next) => {
  let token;

  // Revisa si viene el token en el header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Extrae el token
      token = req.headers.authorization.split(' ')[1];

      // Verifica el token y obtiene el payload
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Busca al usuario y lo adjunta a req.user (sin contraseña)
      req.user = await User.findById(decoded.id).select('-password');

      next(); // Continúa con el controlador
    } catch (error) {
      return res.status(401).json({ message: 'Token inválido o expirado' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'No se proporcionó token de autenticación' });
  }
};

module.exports = { protect };
