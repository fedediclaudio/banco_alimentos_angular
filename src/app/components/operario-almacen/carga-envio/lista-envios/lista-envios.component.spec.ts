import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEnviosComponent } from './lista-envios.component';

describe('ListaEnviosComponent', () => {
  let component: ListaEnviosComponent;
  let fixture: ComponentFixture<ListaEnviosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEnviosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEnviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
