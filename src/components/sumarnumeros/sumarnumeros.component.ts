import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-sumarnumeros',
    templateUrl: './sumarnumeros.component.html',
    standalone:false
})

export class SumarNumerosComponent implements OnInit {
    @ViewChild("cajanumero1") cajaNumero1Ref: ElementRef;
    @ViewChild("cajanumero2") cajaNumero2Ref: ElementRef;
    public suma: number;
    constructor() { 
        //En angular aunque sean referencias, todas las variables deben
        //ser instanciasdas
        this.cajaNumero1Ref = new ElementRef(0)
        this.cajaNumero2Ref = new ElementRef(0)
        this.suma = 0;
    }

    ngOnInit() { }
    sumarNumeros():void{
        let num1 = this.cajaNumero1Ref.nativeElement.value;
        let num2 = this.cajaNumero2Ref.nativeElement.value;
        this.suma = parseInt(num1) + parseInt(num2)
    }
}