import { Component } from '@angular/core';

@Component({
    selector: 'app-formbinding',
    templateUrl: 'formbinding.component.html',
    standalone:false
})

export class FormBindingComponent{
    public user: any;
    public mensaje: string;

    constructor() { 
        this.mensaje = "";
        this.user = {
            nombre: "",
            apellidos:"",
            edad:0,
        }
    }
    recibirDatos():void{
        this.mensaje = "Datos Recibidos"
    }
}