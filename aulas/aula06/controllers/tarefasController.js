const tarefas = [];

//lista uma tarefa
function listarTarefas(req, res){
    res.json("");
}

//cria uma tarefa
function criarTarefa (req, res){
    const novaTarefa = { id: tarefas.length + 1, ...req.body };
    res.status(201).json(novaTarefa);
    tarefas.push(novaTarefa);
}

//lista uma tarefa pelo id
function listarTarefasId (req, res){
    const { id } = req.params;
    const tarefasEncontrada = tarefas.find((item) => item.id === parseInt(id));
    if (tarefasEncontrada) res.json(tarefasEncontrada);
    else res.status(404).json({ msg: "Tarefa não encontrada" });
}

//atualiza uma tarefa
function atualizarTarefa (req, res){
    const { id } = req.params;
    const tarefasEncontrada = tarefas.find((item)=> item.id === parseInt(id));
    if(!tarefasEncontrada) return res.status(404).json({msg:'Tarefa não encontrada'})
    tarefasEncontrada.nome = req.body.nome
    tarefasEncontrada.concluida = req.body.concluida
    if(tarefasEncontrada) return res.json(tarefasEncontrada)
}

//deleta uma tarefa
function deletarTarefa (req, res){
    const { id } = req.params;
    const tarefasEncontrada = tarefas.find((item)=> item.id === parseInt(id));
    if(!tarefasEncontrada) return res.status(404).json({msg:'Tarefa não encontrada'})
    let index = tarefas.indexOf(tarefasEncontrada)
    tarefas.splice(index,1)
    res.status(204).end();
}

module.exports = { listarTarefas, criarTarefa, listarTarefasId, atualizarTarefa, deletarTarefa }