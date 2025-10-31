const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const usuariosRouter = require('./routes/usuarioRouter');
const produtosRouter = require('./routes/produtosRouter');
const indexRouter = require('./routes/index')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/produtos', produtosRouter);

module.exports = app;
