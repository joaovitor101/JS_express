import Sequelize from "sequelize";

import conection from "../config/sequelize-config.js";

const Pedido = conection.define("pedido", {
    valor: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    },
});

Pedido.sync({ force: false });
export default Pedido;
