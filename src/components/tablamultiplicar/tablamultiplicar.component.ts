import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  standalone: false,
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css',
})
export class TablamultiplicarComponent {
  @ViewChild("cajaNumero") cajaNumeroRef!: ElementRef;

  public numero: number;
  public resultados: Array<number>
  
  constructor(){
    this.numero = 0;
    this.resultados = [];
  }
  realizarTabla(){
    this.numero = parseInt(this.cajaNumeroRef.nativeElement.value)
    this.resultados = []
    for (let i = 1; i <= 10; i++) {
      this.resultados.push(this.numero * i)
    }
    console.log(this.resultados);
  }
}
