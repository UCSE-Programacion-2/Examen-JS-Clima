const express = require('express');
const cors = require('cors');
const path = require('path');
const ciudades = require('./data/ciudades.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Ruta base
app.get('/', (req, res) => {
  res.send('Servidor de Clima corriendo. Consulta ciudades en /api/ciudades');
});

// Obtener todas las ciudades
app.get('/api/ciudades', (req, res) => {
  res.json(ciudades);
});

// Obtener clima de una ciudad específica por ID o nombre
app.get('/api/clima/:id', (req, res) => {
  const { id } = req.params;
  const ciudad = ciudades.find(
    (c) => c.id.toLowerCase() === id.toLowerCase() || c.nombre.toLowerCase() === id.toLowerCase(),
  );

  if (!ciudad) {
    return res.status(404).json({ error: 'Ciudad no encontrada en el registro meteorológico' });
  }

  return res.json(ciudad);
});

// Servir datos estáticos
app.use('/data', express.static(path.join(__dirname, 'data')));

app.listen(PORT, () => {
  console.log(`Servidor de Clima escuchando en http://localhost:${PORT}`);
  console.log(`API de ciudades: http://localhost:${PORT}/api/ciudades`);
});
