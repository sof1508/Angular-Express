export class Persona {
    _id?: string;
    Nombre: string;
    Apellidos: string;
    Edad: number;
    Dni: string;
    Cumpleanyos: Date;
    Color: string;
    Sexo: string;

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanyos: Date, color: string, sexo: string){
        this.Nombre = nombre;
        this.Apellidos = apellidos;
        this.Edad = edad;
        this.Dni = dni;
        this.Cumpleanyos = cumpleanyos;
        this.Color = color;
        this.Sexo = sexo;
    }

    
    public static getPersonaByDni(personas: Persona[], dni: String): Persona | undefined{
        return personas.find(persona => persona.Dni == dni);      
    }

    
}


