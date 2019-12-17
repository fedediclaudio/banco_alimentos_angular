import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionPaqueteComponent } from './creacion-paquete.component';

describe('CreacionPaqueteComponent', () => {
  let component: CreacionPaqueteComponent;
  let fixture: ComponentFixture<CreacionPaqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreacionPaqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
