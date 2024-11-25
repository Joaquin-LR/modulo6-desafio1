import fs from "fs";
import path from "path"; //Módulo nativo de Node.js, para hacer más fácil trabajar con rutas

// Ruta absoluta al archivo citas.json
const citasPath = path.resolve("data/citas.json"); //Genera ruta absoluta compatible con cualquier sistema operativo    

// Función para registrar una cita
export const registrar = (nombre, edad, animal, color, enfermedad) => {
    const nuevaCita = { nombre, edad, animal, color, enfermedad };
    let citas;

//Try catch -> Manejar errores. Primero se intenta  (try) "a la buena", y si no, catch, para ver qué se hace

    try {
        // Leer citas existentes (Así no repetimos)
        const data = fs.readFileSync(citasPath, "utf-8");
        citas = JSON.parse(data); //String de json a arreglo
    } catch (error) {
        citas = []; // Si no existe o está vacío, inicializar como arreglo vacío. Buen manejo de "error"
    }

    // Agregar nueva cita
    citas.push(nuevaCita);
    fs.writeFileSync(citasPath, JSON.stringify(citas, null, 2)); //Necesito convertir el arrelgo citas a json, sin filtros (null), sangría 2 espacios
    console.log(`Cita registrada exitosamente para ${nombre}.`); //Aquí el usuario ve cómo satisfactoriamente se registró la cita, con el nombre del animalito
};

// Función para leer las citas
export const leer = () => {
    try {
        const data = fs.readFileSync(citasPath, "utf-8");
        const citas = JSON.parse(data); //String de json a arreglo

        if (citas.length === 0) { //Longitud cero -> Prácticamente "nada" -> No hay citas
            console.log("No hay citas registradas.");
        } else { //Negación de "nada" es que hay algo y se lee
            console.log("Citas registradas:");
            citas.forEach((cita, index) => {
                console.log(`${index + 1}. Nombre: ${cita.nombre}, Edad: ${cita.edad}, Tipo: ${cita.animal}, Color: ${cita.color}, Enfermedad: ${cita.enfermedad}`);
            });
        }
    } catch (error) {
        console.error("Error al leer las citas: No se encuentra el archivo o está vacío.");
    }
};
