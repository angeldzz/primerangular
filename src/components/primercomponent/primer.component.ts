import { Component } from "@angular/core";

//UN componente debe tener siempre la declaracion de su contenido

@Component({
    //Debemos declara el nombre del componente
    //mediante su selector en html
    //en angular los selectores llevan guion
    selector:"primer-component",
    standalone:false,
    //por ahora no voy a tener html separado, 
    // podemos incluirlo dentro del propio component
    templateUrl:'./primer.component.html',
    styleUrl:'./primer.component.css'
})
//Cada component siempre debe tener una clase asociada en su TS
// dicho nombre de clase siempre lleva mayusculas y se declara dentro de app-module.ts
export class PrimerComponent{
    // aqui es donde se declaran las variables
    // dichas variables deben tener un tipado (TypeScript)
    public titulo: string;
    public descripcion: string;
    public year: number;

    // en angular, al igual que en react, tenemos un constructor,
    // en dicho contructor sera donde inicializaremos los elementos
    // de mi clase
    constructor(){
        // para acceder a objetos de la clase utilizamos la palabra this
        this.titulo = "Hoy es martes"
        this.descripcion = "Hoy gana el Madrid!!!"
        this.year = 2025
    }
}