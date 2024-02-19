const express = require('express');
const Calculadora = require('../model/calculo');
const resultado = express.Router();

resultado.post('/', (req, res) => {
    const { valorInvestido, taxaDecimal, tempo } = req.body;
    const jurosCompostos = Calculadora.JurosCompostos(
        parseFloat(valorInvestido), parseFloat(taxaDecimal), parseFloat(tempo));
        res.redirect(`/resultado.html?jurosCompostos=${jurosCompostos}`)
});

module.exports = resultado