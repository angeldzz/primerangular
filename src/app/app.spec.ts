import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksAngular } from '../components/hooksangular/hooksangular.component';
import { Deportes } from '../components/deportes/deportes.component';
import { DeportesV2Component } from '../components/deportesv2/deportesv2.component';
import { FormBindingComponent } from '../components/formbinding/formbinding.component';
import { SumarNumerosComponent } from '../components/sumarnumeros/sumarnumeros.component';
import { TablamultiplicarComponent } from '../components/tablamultiplicar/tablamultiplicar.component';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        App,
        PrimerComponent,
        HooksAngular,
        Deportes,
        DeportesV2Component,
        FormBindingComponent,
        SumarNumerosComponent,
        TablamultiplicarComponent
      ],
      imports: [FormsModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Soy el primer component de Angular!!!');
  });
});
