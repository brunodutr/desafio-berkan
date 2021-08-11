import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaFormularioComponent } from './conta-formulario.component';

describe('ContaFormularioComponent', () => {
  let component: ContaFormularioComponent;
  let fixture: ComponentFixture<ContaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
