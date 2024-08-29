const express = require("express");
const app = express();

app.get("/", function(req, res){   
    res.send("Hellow, boas boas !")
})

app.listen(8080, function (error) {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso");
  }
});
