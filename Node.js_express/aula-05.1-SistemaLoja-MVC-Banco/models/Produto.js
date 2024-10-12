// ORM - Sequelize
import Sequelize from "sequelize"

// Configuração do Sequelize
import connection from "../config/sequelize-config.js"

// .define cria a trabela no banco
const Produto = connection.define('produtos', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },

    preco:{
<<<<<<< HEAD
        type: Sequelize.DOUBLE,
=======
        type: Sequelize.STRING,
>>>>>>> ca01344b023c4c4ced63a7d39ea287cbea1cda54
        allowNull: false
    },

    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// Não força a criação da tabela caso já exista
Produto.sync({force: false})

export default Produto