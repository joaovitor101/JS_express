import express from "express";
const app = express();
import FilmeController from "./controllers/FilmeController.js";
import connection from "./config/Sequelize-config.js";

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/", FilmeController);

connection
	.authenticate()
	.then(() => {
		console.log("Conexão realizada com sucesso!");
	})
	.catch((error) => {
		console.log(error);
	});

connection
	.query(`create database if not exists filmes;`)
	.then(() => {
		console.log("O banco de dados foi criado!");
	})
	.catch((error) => {
		console.log(error);
	});

const port = 8080;
app.listen(port, (error) => {
	if (error) {
		console.log(`erro ao iniciar o servidor: ${error}`);
	} else {
		console.log(
			`servidor iniciado com sucesso em: http://localhost:${port}`
		);
	}
});
