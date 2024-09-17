// Importando o Express na aplicação
const express = require("express"); // CommomJS Modules
// Criando uma instância do Express
const app = express();

app.set("view engine", "ejs");
// CRIANDO A ROTA PRINCIPAL
app.get("/", function (req, res) {
  res.render("index"); // Render é usado para renderizar a página
});

// ROTA DE PERFIL
app.get("/perfil/:nome?", function (req, res) {
  const nome = req.params.nome;
  res.render("perfil", {
    nome: nome,
  });
});

// ROTA DE VÍDEOS
app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist;
  const video = req.params.video;
  const listaPlaylist = ["Machine Learning", "Deep Learning", "Docker e Kubernetes", "Automação com Ansible", "DevOps Fundamentals"];
  const listaVideo = ["Aula 1- Udacity", "Aula 3- Coursera", "Aula 4- edX", "Aula 5- Codecademy"];
  res.render("videos", {
    playlist: playlist,
    video: video,
    listaVideo: listaVideo,
    listaPlaylist: listaPlaylist,
  });
});

// ROTA DE PRODUTOS
app.get("/produtos/:produto?", (req, res) => {
  const listaProdutos = ["Computador", "Tablet", "Celular", "Notebook"];
  const produto = req.params.produto;
  res.render("produtos", {
    produto: produto, // Envia o parâmetro para a página
    listaProdutos: listaProdutos,
    // Na pagina produtos.ejs haverá uma testagem de condição
  });
});

// ROTA PEDIDOS
app.get("/pedidos", (req, res) => {
  const pedidos = [
    {produto: "Celular", valor: 3000},
    {produto: "Computador", valor: 4000},
    {produto: "Tablet", valor: 2000},
    {produto: "Notebook", valor: 3800}
  ]
  res.render("pedidos", {
    // Envia o array de objetos para a página
    pedidos: pedidos,
  })
});

// Iniciando o servidor na porta 8080
app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
