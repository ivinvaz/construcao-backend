const Tarefa = require('../models/tarefaModel');

async function listar(req,res){
    try{
        const tarefas = await Tarefa.find({});
        return res.json(tarefas);
    }catch(err){
        res.status(500).json({ msg: 'Deu ruim' + err.message })
    }
}

async function criar(req,res){
    const Novatarefa = await Tarefa.insertOne({nome:req.body.nome,concluida:false})
    return res.status(201).json(Novatarefa);
}

async function buscar(req,res,next){
    const { id } = req.params;
    const tarefaEncontrada = await Tarefa.findOne({_id:id});
    next();
}   


async function exibir(req,res){
    return res.json({});
}   

async function atualizar(req,res){
    const { id } = req.params;
    const tarefaAtualizada = await Tarefa.findOneAndUpdate({_id:id},{...req.body});
    return res.json(tarefaAtualizada);
}

async function deletar(req,res){
    const { id } = req.params;
    const tarefaAtualizada = await Tarefa.findOneAndDelete({_id:id},{...req.body});
    return res.status(204).end();
}

module.exports = { listar, buscar, criar, atualizar, deletar, exibir };