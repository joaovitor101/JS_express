const express = require("express");
const app = express();
//Definindo o EJS como renderizador de pagina

app.set('view engine', 'ejs')

//rota main
app.get("/", (req, res) => {   
  //será renderizada a pagina index.ejs que está na pasta views
    res.render('index')
})

app.get("/perfil", (req, res) => {   
  //será renderizada a pagina index.ejs que está na pasta views
    res.render('perfil')
})

app.get("/videos", (req, res) => {   
  //será renderizada a pagina index.ejs que está na pasta views
    res.render('videos')
})

app.get("/produtos/:produto?", (req, res) => {   
  //será renderizada a pagina index.ejs que está na pasta views
  const listaProdutos = ['Computador', 'Celular', 'Tablet', 'Notebook'];
  const produto = req.params.produto
    res.render('produtos', { 
      produto: produto,
      listaProdutos : listaProdutos
    })
})

//Rota perfil
// :nome é um parâmetro obrigatório
app.get("/perfil/:nome?", (req, res) =>{
  const nome = req.params.nome

  if(nome) {
    res.send(`Olá, ${nome}! You're.`)
  } else{
    res.send(`faça login`);
  }

})

//Rota video
// :playlist? e :video - parâmetros opcionais
app.get("/videos/:playlist?/:video?", (req, res) =>{
  const playlist = req.params.playlist
  const video = req.params.video
  if(playlist && video == undefined){
    res.send(`<h2>Você está na playlist ed ${playlist}. </h2>`)
  }
  //parâmetros = true
  if(playlist && video){
    res.send(`<h2>Você está na playlist ed ${playlist}. </h2> <br> Reproduzindo o video ${video}...`)
  } else{
    res.send("<h1>Página de vídeo</h1>")
  }

})
//





const port = 8080

app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});


app.get("/pedidos", (req, res) => {
  const pedidos = [
    {produto: "Celular", valor: 3000},
    {produto: "Computador", valor: 4000},
    {produto: "Tablet", valor: 2000},
    {produto: "Notebook", valor: 3800}
  
  ]
  res.render("pedidos", {
    pedidos: pedidos,
  })
})