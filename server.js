const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Conexão com MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/clientes-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Modelo do Cliente
const Cliente = mongoose.model('Cliente', {
    nome: String,
    email: String,
    telefone: String,
    endereco: String,
    dataCadastro: { type: Date, default: Date.now }
});

// Rotas da API
app.post('/api/clientes', async (req, res) => {
    try {
        const cliente = new Cliente(req.body);
        await cliente.save();
        res.status(201).json(cliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/api/clientes', async (req, res) => {
    try {
        const clientes = await Cliente.find().sort({ dataCadastro: -1 });
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}); 