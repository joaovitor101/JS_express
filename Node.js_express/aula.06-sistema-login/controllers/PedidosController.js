import express from "express";
const router = express.Router();
import Pedido from "../models/Pedido.js";
import Auth from "../middleware/Auth.js";

// ROTA PEDIDOS
router.get("/pedidos", Auth, (req, res) => {
	Pedido.findAll().then((pedidos) => {
		res.render("pedidos", {
			pedidos: pedidos,
		});
	});
});

export default router;
