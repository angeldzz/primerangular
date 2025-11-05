import { Component} from '@angular/core';


@Component({
    selector: 'app-deportesv2',
    templateUrl: './deportesv2.component.html',
    styleUrl:"./deportesv2.component.css",
    standalone:false
})

export class DeportesV2Component {
    public sports: Array<string>
    public numeros: Array<number>
    constructor() { 
        this.sports = ["Petanca", "Futbol", "Tenis", "Baloncesto"]
        this.numeros = [9,8,7,6,5,4,3,2,1]
    }
}