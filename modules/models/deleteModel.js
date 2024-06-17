const db = require('../db')

class ModelDelete{
    constructor(db){
        this.db = db;
    }
modelDelete(req, res){

    const { id } = req.params;
    const deleteQuery = 'DELETE FROM usuarios WHERE id= ?';

        this.db.query(deleteQuery, [id], (err, results)=>{
        if (err){
            console.error('Erro ao deletar um usuario', err);
            return res.status(500).send('Erro ao deletar um usuario');   
        }
        if (results.affectedRows ===0){
            return res.status(404).send('Usuario não encontrado');
        }
        return res.status(200).send('Usuario deletado');
    });
};
};
const deleteModel = new ModelDelete(db);
exports.deleteModel = deleteModel;
