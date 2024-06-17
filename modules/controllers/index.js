//Account Controller
const accountModel = require('../models/accountModel');
const createAccount = (req, res) =>{
   accountModel.accountModel.createAcount(req, res);
}

//getController 
const getUser = require('../models/getModel');
const getId = (req, res) =>{
   getUser.getUser.getId(req, res);
};

//getAllController
const getAllModel = require('../models/getAllModel');

const getAll = (req, res) =>{
    getAllModel.getAllmodel.getAll(req, res);
}

//putController
const putModel = require('../models/putModel');

const modelPut = (req,res)=>{
    putModel.putModel.modelPut(req, res);  
}

//deleteController
const deleteModel = require ('../models/deleteModel');
const modelDelete = (req, res) =>{
    deleteModel.deleteModel.modelDelete(req, res);
};

//Exportando métodos:
module.exports ={
    createAccount,
    getId,
    modelPut,
    getAll,
    modelDelete
};