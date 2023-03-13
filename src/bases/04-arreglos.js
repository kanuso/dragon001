//ARREGLOS
//se puede agregar posiciones
//const arreglo = new Array (100);
//asi se agrega una adicional
//arreglo.push (1);
const arreglo = [1, 2, 3, 4,];
//arreglo.push (1);
//arreglo.push (2);
//arreglo.push (3);
//arreglo.push (4);
//el arreglo2 clona el uno y asigna un nuevo numero utilizando el ... spreat
let arreglo2 =[...arreglo, 5];
//utilizando el map, multiplica por dos el numero tomado de el arreglo 2
const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);