const persona = {
    nombre: "tony",
    apellido: "stark",
    edad: 45,
    direccion: {
        ciudad: "guatemala",
        zip: 502,
        lat:321315,
        lng:321615486,
    }

};
//clonar objeto

const persona2= {...persona};
persona2.nombre="peter";
console.table (persona);
console.table(persona2);