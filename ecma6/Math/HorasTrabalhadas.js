let horasTrabalhadas = 180;
let valorHoraAula = 20;
let percentualDeDesconto = 10;

let salarioBruto = horasTrabalhadas * valorHoraAula;
let totalDeDesconto = percentualDeDesconto / 100;

let salarioLiquido = salarioBruto - totalDeDesconto;

console.log(`Salário liquido ${salarioLiquido} e o salário bruto ${salarioBruto} `);