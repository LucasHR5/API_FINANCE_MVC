const db = require('../db');

class AccountModel{
    constructor(db) {
        this.db = db;
    }

createAcount(req, res) {
    const { nome, email, senha } = req.body; //criando variavel name que será declarada pelo usuario  
    if (!nome || !email || !senha){
        return res.status(400).send('Nome, email e senha são campos obrigatórios');   //condição para caso o usuario não insira os valores de nome, email e senha, gerar um error
    }

    const insertQuery = 'INSERT INTO usuarios (nome, email, senha) values (?,?,?)';///verificar por que não pode colocar os valores direto na string do sql
    const values = [nome, email, senha];  

   this.db.query(insertQuery, values, (err, results) =>{
    if(err){
        console.error('Erro ao inserir registro', err);
        return res.status(500).send('Erro ao inserir registro');
    }
    return res.status(201).send('Usuario cadastrado');
});
};
}

const accountModel= new AccountModel(db);

exports.accountModel = accountModel;