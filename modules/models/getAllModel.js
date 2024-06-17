const db = require('../db');

class GetAllModel{
    constructor(db){
        this.db = db;
    }
    
getAll (req, res) {
const selectQuery = 'SELECT * FROM usuarios ORDER BY id DESC';

this.db.query(selectQuery, (err, results) =>{
 if(err){
     console.error('Erro ao buscar usuarios: ', err);
     return res.status(500).send('Erro ao buscar usuarios');
 }
 return res.status(200).json(results)
});
};
}
const getAllmodel = new GetAllModel(db);
exports.getAllmodel = getAllmodel; 