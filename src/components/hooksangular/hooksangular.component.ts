import { Component,OnInit,DoCheck } from "@angular/core";

@Component({
    selector:"hooks-angular",
    standalone:false,
    templateUrl:"./hooksangular.component.html",

})
export class HooksAngular implements OnInit{
    public mensaje: string;
    constructor(){
        console.log("Constructor: Primer metodo de inicio de componente");
        this.mensaje = "Hoy es Miercoles";
    }
    cambiarMensaje():void{
        this.mensaje = "Y mañana juernes!!!"
    }
    ngOnInit(): void {
        console.log("Soy OnInit, despoes de contructor!!!");
    }
    ngDoCheck(): void{
        console.log("NgCkeck. cambiado algo en Render!!!");
    }
}