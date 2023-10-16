//Importamos los objetos y la funciones
import { Direccion,Alumno,Ensenyanza,Instituto,direccionInstituto,
    matricularAlumnos,mostrarAlumnos } from "./t9modulo-instituto";
//Creamos los objetos que nos pide el ejercicio
const ensenyanza1:Ensenyanza={
    nivel:"Secundaria",
    obligatoria:true,
    turno:"Mañana",
    direccion:{
        calle:"Avenida de la Libertad, 56",
        cp:54323,
        localidad:"Zaragoza",
        provincia:"Zaragoza"
    }
}

const ensenyanza2:Ensenyanza={
    nivel:"Bachillerato",
    obligatoria:true,
    turno:"Tarde",
    direccion:{
        calle:"Calle del Sol, 67",
        cp:54321,
        localidad:"Zaragoza",
        provincia:"Zaragoza"
    }
} 

const ensenyanza3:Ensenyanza={
    nivel:"Formacion Profesional",
    obligatoria:false,
    fp:"Ciclo Formativo de Grado Superior de Desarrollo de Aplicaciones Multiplataforma",
    turno:"Telemático",
    direccion:{
        calle:"Calle de los Sueños, 27",
        cp:54367,
        localidad:"Zaragoza",
        provincia:"Zaragoza"
    }
} 

const alumno1:Alumno={
    nombre:"Juan Pérez",
    edad:16,
    sexo:"Masculino",
    ensenyanza:ensenyanza1,
    direccion:{
        calle:"Calle de los Pájaros, 45",
        cp:54321,
        localidad:"Zaragoza",
        provincia:"Zaragoza"
    }
}

const alumno2:Alumno={
    nombre:"María González",
    edad:17,
    sexo:"Femenino",
    ensenyanza:ensenyanza2,
    direccion:{
        calle:"Calle del Bosque, 34",
        cp:54323,
        localidad:"Zaragoza",
        provincia:"Zaragoza"
    }
}

const instituto:Instituto={
    nombre:"Instituto Educativo San Juan",
    director:"María Rodríguez",
    telefono:"123456789",
    correo:"contacto@institutosanjuan.edu",
    direccion:{
        calle:"Avenida Principal, 123",
        cp:12345,
        localidad:"Zaragoza",
        provincia:"Zaragoza"
    },
    alumnos:[]
}
//Y utilizamos los metodos
matricularAlumnos(alumno1,instituto);
matricularAlumnos(alumno2,instituto);
mostrarAlumnos(instituto);
direccionInstituto(instituto);


    
