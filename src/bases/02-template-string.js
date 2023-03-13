const name = "Kenedy";
const lastName = "Palma";
//const CompleteName = name + " " + lastName + " " +(1+1);
const CompleteName = ` ${name} ${lastName} ${1+1} `;
console.log(CompleteName);
function getSaludo(name) {
    return "Hola" + name;
}
console.table(`Este es un texto: ${getSaludo(CompleteName)}`);
