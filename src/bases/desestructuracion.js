//desestructuracion 
//asignacion desestructurante
const persona={
    nombre:'tony',
    edad: 45,
    clave:'iroman'
};
//const {nombre,edad,clave}=persona;

//console.log(persona,edad,clave);

const returnpersona=({nombre,edad,clave,rango='capitan'})=>{
    console.log(nombre,clave,edad,rango)
}
returnpersona(persona);