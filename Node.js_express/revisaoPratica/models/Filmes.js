import Sequelize from "sequelize";
import connection from "../config/Sequelize-config.js";

const Filmes = connection.define("filmes", {
	titulo: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	genero: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	duracao: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
});

Filmes.sync({ force: false });
export default Filmes;
