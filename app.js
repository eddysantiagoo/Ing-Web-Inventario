const express = require('express');
const cors = require('cors');
const app = express();
const fileUpload = require('express-fileupload');

const usuarios = require('./routes/usuario');
const tiposEquipo = require('./routes/tipoEquipo');
const estados = require('./routes/estado');
const marcas = require('./routes/marca');

const inventarios = require('./routes/inventario');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use(cors());

app.use('/api/usuarios', usuarios);
app.use('/api/tiposequipo', tiposEquipo);
app.use('/api/estados', estados);
app.use('/api/marcas', marcas);
app.use('/api/inventarios', inventarios);

module.exports = app;