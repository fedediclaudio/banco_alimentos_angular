import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaProductosBultoComponent } from './carga-productos-bulto.component';

describe('CargaProductosBultoComponent', () => {
  let component: CargaProductosBultoComponent;
  let fixture: ComponentFixture<CargaProductosBultoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaProductosBultoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaProductosBultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
