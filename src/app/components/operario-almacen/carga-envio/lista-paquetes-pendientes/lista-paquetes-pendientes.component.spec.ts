import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPaquetesPendientesComponent } from './lista-paquetes-pendientes.component';

describe('ListaPaquetesPendientesComponent', () => {
  let component: ListaPaquetesPendientesComponent;
  let fixture: ComponentFixture<ListaPaquetesPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPaquetesPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPaquetesPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
