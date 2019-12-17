import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVehiculosComponent } from './lista-vehiculos.component';

describe('ListaVehiculosComponent', () => {
  let component: ListaVehiculosComponent;
  let fixture: ComponentFixture<ListaVehiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaVehiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
