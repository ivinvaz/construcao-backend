const connect  = require('./database');

const readline = require('readline-sync');

async function inserir(nomeParam,concluidaParam){
    const db = await connect();
    const collection = db.collection('tarefas');
    const resultado = await collection.insertOne({
        nome : nomeParam,
        concluida : concluidaParam
    });


    console.log(resultado);
}

async function listar(nomeParam){
    const db = await connect();
    const collection = db.collection('tarefas');
    const resultado = await collection.findOne({nome:nomeParam});
    console.log(resultado);
}

async function alterar(tarefaParam,nomeParam,concluidaParam){
    const db = await connect();
    const collection = db.collection('tarefas');
    const resultado = await collection.updateOne({nome : tarefaParam}, {
        $set: {nome : nomeParam,
        concluida : concluidaParam}
    });

    console.log(resultado);
}

async function remover(nomeParam){
    const db = await connect();
    const collection = db.collection('tarefas');
    const resultado = await collection.findOneAndDelete({nome:nomeParam});
    console.log(resultado);
}

async function main() {
    while(true){
        console.log('Menu Principal');
        console.log('1 - Criar tarefa');
        console.log('2 - Buscar tarefa');
        console.log('3 - Alterar tarefa');
        console.log('4 - Remover tarefa');
        console.log('5 - Sair');

        const opcao = readline.question('Entre sua opção: ');

        switch(parseInt(opcao)){
            case 1: {
                const nome = readline.question('Informe o nome: ')
                const concluida = readline.question('Informe se está concluida ou não: ') == 'true' ? true : false;
                await inserir(nome,concluida);
                break
            };
            case 2: {
                const nome = readline.question('Digite o nome do registro: ');
                await listar(nome);
                break
            };
            case 3: {
                const tarefa = readline.question('Informe o registro a ser editado: ')
                const nome = readline.question('Informe o nome: ')
                const concluida = readline.question('Informe se está concluida ou não: ') == 'true' ? true : false;
                await alterar(tarefa,nome,concluida);
                break
            };
            case 4: {
                const nome = readline.question('Digite o nome do registro: ');
                await remover(nome);
                break
            };;
            case 5: process.exit(0);
        }
    }    
}

main();


