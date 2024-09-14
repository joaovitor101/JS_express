const express = require("express");
const app = express();
//Definindo o EJS como renderizador de pagina

app.set('view engine', 'ejs')
//Definir a pasta dos arquivos estáticos

app.use(express.static('public'))
//rota main
app.get("/", (req, res) => {   
  //será renderizada a pagina index.ejs que está na pasta views
    res.render('index')
})

app.get("/perfil", (req, res) => {   
  //será renderizada a pagina index.ejs que está na pasta views
    const user = {
      nome: 'João Vitor',
      idade: 19,
      email: 'joao.kusaka@fatec.sp.gov.br'
    };
    res.render('perfil', { user: user });
})

const videos = [
  { title: 'Never Gonna Give You Up', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  { title: 'Video 2', url: 'http://example.com/video2' },
  { title: 'Video 3', url: 'http://example.com/video3' }
];

app.get("/videos", (req, res) => {   
  //será renderizada a pagina index.ejs que está na pasta views
  res.render('videos', { videos: videos });
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