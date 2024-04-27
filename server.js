const express = require('express');
const path = require('path');

const app = express();

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "dist")));

// Ruta para manejar la solicitud a la ruta raíz ("/")
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"dist", 'index.html'));
});

// Escuchar en un puerto específico (por ejemplo, 8000)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});