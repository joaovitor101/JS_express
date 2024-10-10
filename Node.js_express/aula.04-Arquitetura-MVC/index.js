// const express = require("express");

import express from 'express' //ES6 Modules
const app = express();

import ClientesController from "./controllers/ClientesController.js"

//Definindo o EJS como renderizador de pagina

app.set('view engine', 'ejs')
//Definir a pasta dos arquivos estáticos

app.use(express.static('public'));


//Definindo rotas que estão no Controller
app.use("/", ClientesController)


//rota main
app.get("/", (req, res) => {   
  //será renderizada a pagina index.ejs que está na pasta views
    res.render('index')
})


const port = 8080

app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});

