import express from "express";
const router = express.Router();
import Auth from "../middleware/Auth.js";

// ROTA PRODUTOS
router.get("/produtos", Auth, (req, res) => {
	const produtos = [
		{
			nome: "Celular Motorola E22",
			preco: 1200,
			categoria: "Eletroportáteis",
		},
		{ nome: "Tablet Samsung", preco: 900, categoria: "Eletrônicos" },
		{ nome: "Notebook Lenovo", preco: 3200, categoria: "Computadores" },
		{ nome: "Fone Bluetooth", preco: 150, categoria: "Periféricos" },
	];
	res.render("produtos", {
		produtos: produtos,
	});
});

export default router;
