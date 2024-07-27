const express = require('express');
const sequelize = require('./config/db');
const libroRoutes = require('./routes/libroRoutes');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', libroRoutes);

sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos exitosa.');
        app.listen(port, () => {
            console.log(`Servidor escuchando en http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });