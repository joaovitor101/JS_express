//importanjdo o sequelize
import Sequelize from "sequelize";

//criando os dados de conexão com o bando de dados
const conection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    pasword: "",
    //comente essa linha na primeira execução
    database: "bancoLoja",
    timezone: "-03:00",
});
export default conection;
