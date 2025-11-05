import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-deportes',
    templateUrl: './deportes.component.html',
    standalone:false,
})

export class Deportes implements OnInit {
    public sports: Array<string>
    constructor() { 
        this.sports = ["Canicas", "Curling", "Dardos", "Petanca"]
    }

    ngOnInit():void { 

    }
}