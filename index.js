import { registrar, leer } from "./operaciones.js"; //Importo el módulo de operaciones.js

const args = process.argv.slice(2); //Hago slice para rescatar lo posterior a 0=node 1=index.js
const operacion = args[0]; //Ya que tengo un arreglo, tomo el primer objeto

switch (operacion) { //Aquí puedo switchear (ejecturar solo) entre dos casos: Cuando se registra y cuando se lee
    case "registrar":
        const [nombre, edad, animal, color, enfermedad] = args.slice(1); //Se rescata lo posterior a registrar o leer, por eso el 1
        if (nombre && edad && animal && color && enfermedad) {
            registrar(nombre, edad, animal, color, enfermedad);
        } else {
            console.error("Faltan argumentos. Uso: node index.js registrar <nombre> <edad> <animal> <color> <enfermedad>");
        }
        break;
    case "leer":
        leer();
        break;
    default:
        console.error('Operación no válida. Usa "registrar" o "leer".');
}
