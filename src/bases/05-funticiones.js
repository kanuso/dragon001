//funciones en js.
const saludar = function(nombre){
    return `hola, ${ nombre }`;
}

const saludar2 =(nombre) => {
    return `hola,${nombre}`;
}
const saludar3=(nombre) => `hola,${nombre}`
const saludar4=()=>`hello world`;

console.log(saludar('goku'));
console.log (saludar2("vegueta"));
console.log(saludar3('gohan'));
console.log(saludar4());

/*const getUser = () =>{
    return{
        uid:'16541321sdf',
        username:'kanuso5465'
    }
    
}
console.log(getUser());*/

//easy way
const getUser = () => ({
    Uid:'156253jff',
    username:'dskfjxhvbkj'
})
const user = getUser();
console.log(user);

const getusuarioactivo=(nombre)=>({
    userid:'ABC567',
    username:nombre
})

const usuarioactivo = getusuarioactivo('fernando');
console.log(usuarioactivo);