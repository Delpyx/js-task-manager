const { listarTarea, crearTarea, borrarTarea, actualizarStatusTarea, buscarTarea } = require('./taskManager');
const {validateTask, requireBody} = require("./helpers/middleware.js");
express = require('express');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

let tasks = [];

app.get('/tasks',(req, res) => {
    listarTarea(res);
});

app.get('/tasks/:id', (req, res) => {
    buscarTarea(req,res);
});

app.post('/tasks',requireBody,validateTask, (req, res) => {
    crearTarea(req,res);
});

app.delete('/tasks/:id', (req, res) => {
    borrarTarea(req,res);
});

app.put('/tasks/:id', (req, res) => {
    actualizarStatusTarea(req,res);
});

module.exports = app;