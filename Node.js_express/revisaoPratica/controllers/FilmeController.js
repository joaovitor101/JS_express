import express from "express";
const router = express.Router();
import Filmes from "../models/Filmes.js";

router.get("/", (req, res) => {
	Filmes.findAll()
		.then((filmes) => {
			res.render("filmes", { filmes: filmes });
		})
		.catch((error) => {
			console.log(error);
		});
});

router.post("/filmes/new", (req, res) => {
	const { titulo, genero, duracao } = req.body;
	Filmes.create({
		titulo,
		genero,
		duracao,
	})
		.then(() => {
			res.redirect("/");
		})
		.catch((error) => {
			console.log(error);
		});
});

router.get("/filmes/delete/:id", (req, res) => {
	const id = req.params.id;
	Filmes.destroy({
		where: {
			id: id,
		},
	})
		.then(() => {
			res.redirect("/");
		})
		.catch((error) => {
			console.log(error);
		});
});

export default router;
