function* gerador() {
    console.log('Passei aqui');
    let numero1 = 5;
    yield numero1;
    let numero2 = 8;
    yield numero2;
}

const iteravel = gerador();
let numero1 = iteravel.next().value;
console.log(numero1);
let numero2 = iteravel.next().value;
console.log(numero2);

const resultado = `O valor total e ${numero1+ numero2}`;

console.log(resultado);