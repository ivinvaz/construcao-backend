const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');



const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

const tarefas = [];
app.get('/tarefas', (req,res)=>{
    res.json('');
})

app.post('/tarefas', (req,res)=>{
    const novaTarefa = {id: tarefas.length + 1, ...req.body};
    res.status(201).json(novaTarefa);
    tarefas.push(novaTarefa);
})

app.get('/tarefas/:id', (req,res)=>{
    const { id } = req.params;
    const tarefasEncontrada = tarefas.find(item => item.id === parseInt(id)) 
    if(tarefasEncontrada) res.json(tarefasEncontrada)
    else res.status(404).json({msg:'Tarefa não encontrada'})
})

module.exports = app;