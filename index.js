import express from "express";

import PerfilController from"./controllers/PerfilController.js"

const app = express();

app.set("view engine","ejs");

app.use(express.static("public"));

app.use("/", PerfilController);


app.get("/", function(req, res){
    res.send("index")
});





const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log("ocorreu um erro!" + error);
  } else {
    console.log(
      `servidor  iniciado com sucesso no endereço: http://localhost:${port}`,
    );
  }
});
