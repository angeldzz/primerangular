import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TablamultiplicarComponent } from './tablamultiplicar.component';

describe('TablamultiplicarComponent', () => {
  let component: TablamultiplicarComponent;
  let fixture: ComponentFixture<TablamultiplicarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablamultiplicarComponent],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablamultiplicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
