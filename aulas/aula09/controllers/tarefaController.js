

async function listar(req,res){
    return res.json({});
}

async function criar(req,res){
    return res.status(201).json({});
}

async function buscar(req,res,next){
    const { id } = req.params;
    next();
}   


async function exibir(req,res){
    return res.json({});
}   

async function atualizar(req,res){
    return res.json({});
}

async function deletar(req,res){
    return res.status(204).end();
}

module.exports = { listar, buscar, criar, atualizar, deletar, exibir };