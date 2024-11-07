// Importando o Express com ES6 Modules
import express from "express";
// Iniciando o Express na variável app
const app = express();
const port = 4040;

//importando o sequelize com os dados da conexão
import conection from "./config/sequelize-config.js";
// Importando os Controllers (onde estão as rotas)
import ClientesController from "./controllers/ClientesController.js";
import ProdutosController from "./controllers/ProdutosController.js";
import PedidosController from "./controllers/PedidosController.js";
import UsersController from "./controllers/UsersController.js";

// IMPORTANDO O FLASH
import flash from "express-flash";
// configurando o flash
app.use(flash());

// IMPORTANDO CRIADOR DE SESSÕES DO EXPRESS
import session from "express-session";
// CONFIGURANDO O EXPRESS SESSION
app.use(
	session({
		secret: "lojasecret",
		cookie: { maxAge: 3600000 },
		saveUninitialized: false,
		resave: false,
	})
);

//para aceitar os dados do form
app.use(express.urlencoded({ extended: false }));

//realizando a conexão com o banco de dados
conection
	.authenticate()
	.then(() => {
		console.log("Conexão com o banco de dados foi bem sucedida!");
	})
	.catch((error) => {
		console.log(error);
	});

//criando o banco se não existir
conection
	.query("create database if not exists loja;")
	.then(() => {
		console.log("Banco de dados está criado!");
	})
	.catch((error) => {
		console.log(error);
	});

// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));

// Definindo o uso das rotas dos Controllers
app.use("/", ClientesController);
app.use("/", ProdutosController);
app.use("/", PedidosController);
app.use("/", UsersController);

// ROTA PRINCIPAL
app.get("/", (req, res) => {
	res.render("index", {
		successMessage: req.flash("success"),
		errorMessage: req.flash("error"),
	});
});

// INICIA O SERVIDOR NA PORTA DEFINIDA LÁ EM CIMA
app.listen(port, function (erro) {
	if (erro) {
		console.log("Ocorreu um erro!");
	} else {
		console.log(
			`Servidor iniciado com sucesso em: http://localhost:${port}`
		);
	}
});
