import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-deportes',
    templateUrl: './deportes.component.html',
    styleUrl:'./deportes.component.css',
    standalone:false,
})

export class Deportes implements OnInit {
    public sports: Array<string>
    public numeros: Array<number>
    constructor() { 
        this.sports = ["Canicas", "Curling", "Dardos", "Petanca","Tenis"]
        this.numeros = [9,8,7,6,5,4,3,2,1]
    }

    ngOnInit():void { 

    }
}