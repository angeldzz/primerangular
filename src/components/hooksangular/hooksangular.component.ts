import { Component,OnInit,DoCheck } from "@angular/core";

@Component({
    selector:"hooks-angular",
    standalone:false,
    templateUrl:"./hooksangular.component.html",

})
export class HooksAngular implements OnInit{
    constructor(){
        console.log("Constructor: Primer metodo de inicio de componente");
    }
    ngOnInit(): void {
        console.log("Soy OnInit, despoes de contructor!!!");
    }
    ngDocheck(): void{
        console.log("NgCkeck. cambiado algo en Render!!!");
    }
}