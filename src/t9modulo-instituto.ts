//Exportamos todos los interfaces y funciones
//Creamos un interface direccion
export interface Direccion{
    calle:string,
    cp:number,
    localidad:string,
    provincia:string
}
//Creamos un interface enseñanza, que tiene un objeto direccion
export interface Ensenyanza{
    nivel:string,
    obligatoria:boolean,
    fp?:string,
    turno:"Mañana"|"Tarde"|"Telemático"
    direccion:Direccion
}
//Creamos un interface alumno, que tiene un objeto direccion y enseñanza
export interface Alumno{
    nombre:string,
    edad:number,
    sexo:"Masculino"|"Femenino",
    ensenyanza:Ensenyanza,
    direccion:Direccion
}
//Creamos un interface instituto, que tiene un objeto direccion
export interface Instituto{
    nombre:string,
    director:string,
    telefono:string,
    correo:string,
    direccion:Direccion,
    alumnos:Alumno[]
}
//Este metodo matricula un alumno en un instituto
export function matricularAlumnos(alumno:Alumno,{alumnos}:Instituto){
    alumnos.push(alumno)
}
//Este metodo muestra el nombre, el nivel y la localidad de los alumnos de un instituto
export function mostrarAlumnos(instituto:Instituto){
    const {alumnos}=instituto
    alumnos.forEach(alumno=>{
        const {nombre,ensenyanza,direccion}=alumno
        const {nivel}=ensenyanza
        const {localidad}=direccion
        console.log("Nombre:",nombre,
                    "\nNivel:",nivel,
                    "\nLocalidad:",localidad)
    })
}
//Este metodo muestra la direccion de un instituto
export function direccionInstituto({direccion}:Instituto){
    const {calle,cp,localidad,provincia}=direccion
    console.log(calle,",",cp,",",localidad,",",provincia)
}