import express from 'express'
const router = express.Router()

//Rota clientes

router.get("/clientes", (req,res) => {
    const clientes = [
        {
         nome: "Ana Silva", 
         cpf:"123.123.123-12",
         endereco: "Rua das Flores, 123 - Bairro Jardim Primavera"
        },
        {
         nome: "Ana Silva", 
         cpf:"123.123.123-12",
         endereco: "Rua das Flores, 123 - Bairro Jardim Primavera"
        },
        {
         nome: "Ana Silva", 
         cpf:"123.123.123-12",
         endereco: "Rua das Flores, 123 - Bairro Jardim Primavera"
        },
        {
         nome: "Ana Silva", 
         cpf:"123.123.123-12",
         endereco: "Rua das Flores, 123 - Bairro Jardim Primavera"
        },
    ]

    res.render("clientes", {
        clientes: clientes
    })
})

export default router