// importa o fremawork
const express = require("express");

// importa o fremawork
const cors = require("cors");

//importa middleware de router
const router = require('./routerTarefa');

//cria uma instacia da aplicação
const app = express();

//middleware de aplicação
app.use((req, res, next) => {
  console.log("Passei aqui");
  next();
});

//middleware embutido ou integrado
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//moddleware de terceiros
app.use(cors());

app.use("/tarefas", router);

// midlleware de erro
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Deu ruim!");
});

// inicia a aplicação
app.listen(3000, () => {
  console.log("App está ON!");
});