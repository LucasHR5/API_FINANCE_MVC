const db = require('../db');

class ModelPut{
    constructor(db){
        this.db = db;
    }

modelPut(req, res) {

    const { id } = req.params;
    const { nome, senha }  = req.body;

    if (!nome||!senha){
    return res.status(400).send('nome, email, senha são campos obrigatórios');
    }

    const updateQuery = `UPDATE usuarios SET nome = ?, senha = ? WHERE id = ?`;
    const values =[nome, senha, id];

    this.db.query(updateQuery, values, (err, results)=>{
    if(err){
        console.error('Erro ao atualizar o usuario:', err);
        return res.status(500).send('Erro ao atualizar o usuario'); //Condição para erro interno no servidor
    }
    if (results.affectedRows ===0){
        return res.status(404).send('Usuario não encontrado');
    }
    return res.status(200).send('Usuario atualizado com sucesso');
});
};
};

const putModel = new ModelPut(db);
exports.putModel = putModel;
