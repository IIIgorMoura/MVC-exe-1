class Calculadora {
    static JurosCompostos(valorInvestido, taxa, tempo) {
        const taxaDecimal = taxa / 100;
        return valorInvestido * Math.pow((1 + taxaDecimal), tempo);
    }
}

module.exports = Calculadora;