const edadLegal = 18;
class persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    getNombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    }
    getApellido(){
        return `${this.apellido}`;
    }
    getEsMayor(){
        return `${this.edad < edadLegal}`;
    }
}

let persona1 = new persona('Enzo', 'López', 21);

console.log(persona1.getNombreCompleto());
console.log(persona1.getApellido());
console.log(persona1.getEsMayor());
