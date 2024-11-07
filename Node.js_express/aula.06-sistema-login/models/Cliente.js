import Sequelize from "sequelize";

import conection from "../config/sequelize-config.js";

// o .define cria tabela no banco
const Cliente = conection.define("clientes", {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});
// não força a criação da tabela caso ela exista
Cliente.sync({ force: false });
export default Cliente;
