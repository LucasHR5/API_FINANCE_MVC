const db = require('../db');

class GetId{
    constructor(db){
        this.db = db;
    }

getId(req, res){

        const { id } = req.params; // obtém o nome dos parametros
        const selectQuery = 'SELECT nome, email, senha FROM usuarios where id = ?';
    
        this.db.query(selectQuery, [id], (err, results) =>{
        if(err){
             console.error('Usuario não encontrado', err);
            return res.status(500).send('Erro ao buscar usuario');
        }

        if (results.length ===0){

            return res.status(404).send('Usuario não encontrado');
        }

        return res.status(200).json(results[0]); //retorna o primeiro usuario encontrado
});
};
};

const getUser = new GetId(db);
exports.getUser = getUser;