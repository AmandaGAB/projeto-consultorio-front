import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarConsultaComponent } from './cadastrar-consulta.component';

describe('CadastrarConsultaComponent', () => {
  let component: CadastrarConsultaComponent;
  let fixture: ComponentFixture<CadastrarConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
