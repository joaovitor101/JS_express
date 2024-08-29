const express = require("express");
const app = express();


//rota main
app.get("/", (req, res) => {   
    res.send("Hellow, boas boas meu mano jogar um vavas !")
})

//Rota perfil
// :nome é um parâmetro obrigatório
app.get("/perfil/:nome", (req, res) =>{
  const nome = req.params.nome
  res.send(`Olá, ${nome}! You're welcome.`)
})

//Rota video
app.get("/videos", (req, res) =>{
  res.send("<h1>Página de vídeo</h1>")
})
//







app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso");
  }
});
