const mysql = require('mysql2');

const connection = mysql.createConnection({ //primeiramente configurar conexão com o banco de dados, definir o IP host, login, senha e o banco de dados que será utilizado
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

//conexão com o banco de dados
connection.connect((err) =>{
    //condição para caso ocorrra erro na conexão com o banco de dados
    if (err){
        console.error('Erro ao conectar com o banco de dados: ', err);
        return;
    }
    console.log('Conexão Bem sucedida com o banco de dados!');
});

module.exports = connection;