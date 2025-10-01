const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.json({});
})
router.get('/:tarefaId', (req,res)=>{
    if(req.params.tarefaId == 1) return res.status(404).json({msg:'Tarefa não encontrada'});
    res.json({});
})
router.post('/', (req,res)=>{
    res.status(201).json({id:'1a2b'});
})
router.put('/:tarefaId', (req,res)=>{
    if(req.params.tarefaId == 1) return res.status(404).json({msg:'Tarefa não encontrada'});
    res.status(200).json({id:'1a2b'});
})
router.delete('/:tarefaId', (req,res)=>{
    if(req.params.tarefaId == 1) return res.status(404).json({msg:'Tarefa não encontrada'});
    res.status(204);
})
module.exports = router;
