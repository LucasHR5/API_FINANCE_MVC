const express = require('express'); //chamando o express
const app = express();
const port = 3002 //definindo a porta
app.use(express.json ());
require('dotenv').config()

//Importando e usando o router 
const accountRoutes = require('../modules/routers/accountRouter');
app.use('/account', accountRoutes);

//Iniciando aplicação
app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
}); 

