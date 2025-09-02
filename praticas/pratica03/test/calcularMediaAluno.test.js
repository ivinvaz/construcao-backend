const { calcularMediaAluno } = require('../src/calcularMediaAluno');

test("Teste calcular média do aluno", function(){
    expect(calcularMediaAluno).toBeDefined();
});

test("Teste Undefined", function(){
    expect(calcularMediaAluno).toBeDefined();
    expect(()=>calcularMediaAluno()).toThrow("Notas a1 ou a2 não informadas");
    expect(()=>calcularMediaAluno(undefined,1,2)).toThrow("Notas a1 ou a2 não informadas");
    expect(()=>calcularMediaAluno(2,undefined,2)).toThrow("Notas a1 ou a2 não informadas");
});

test("a1,a2 Teste Negativo", function(){
    expect(calcularMediaAluno).toBeDefined();
    expect(()=>calcularMediaAluno(-1,-1,2)).toThrow("Notas a1 ou a2 não podem ser negativas");
    expect(()=>calcularMediaAluno(-1,1,2)).toThrow("Notas a1 ou a2 não podem ser negativas");
    expect(()=>calcularMediaAluno(1,-1,2)).toThrow("Notas a1 ou a2 não podem ser negativas");
});

test("a3 Teste Negativo", function(){
    expect(calcularMediaAluno).toBeDefined();
    expect(()=>calcularMediaAluno(1,1,-2)).toThrow("Nota a3 não pode ser negativa");
});

test("a3 Nulo", function(){
    expect(calcularMediaAluno).toBeDefined();
    expect(calcularMediaAluno(6,9,undefined)).toBeCloseTo(3.9);
});

test("melhor nota", function(){
    expect(calcularMediaAluno).toBeDefined();
    expect(calcularMediaAluno(9,3,6)).toBeCloseTo(3.6);
    expect(calcularMediaAluno(3,9,6)).toBeCloseTo(3.9);
});