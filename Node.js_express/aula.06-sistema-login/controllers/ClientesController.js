import express from "express";
const router = express.Router();
import Cliente from "../models/Cliente.js";
import Auth from "../middleware/Auth.js";

// ROTA CLIENTES
router.get("/clientes", Auth, (req, res) => {
	Cliente.findAll().then((clientes) => {
		res.render("clientes", {
			clientes: clientes,
		});
	});
});

//rota de cadastro de cliente
router.post("/clientes/new", Auth, (req, res) => {
	const nome = req.body.nome;
	const cpf = req.body.cpf;
	const endereco = req.body.endereco;

	Cliente.create({
		nome: nome,
		cpf: cpf,
		endereco: endereco,
	}).then(() => {
		res.redirect("/clientes");
	});
});

//rota para deletar
router.get("/clientes/delete/:id", Auth, (req, res) => {
	//coletar o id que veio da url
	const id = req.params.id;
	//metodo para excluir
	Cliente.destroy({
		where: {
			id: id,
		},
	})
		.then(() => {
			res.redirect("/clientes");
		})
		.catch((error) => {
			console.log(error);
		});
});

export default router;
