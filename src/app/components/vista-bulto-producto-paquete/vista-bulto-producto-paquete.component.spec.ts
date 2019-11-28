import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaBultoProductoPaqueteComponent } from './vista-bulto-producto-paquete.component';

describe('VistaBultoProductoPaqueteComponent', () => {
  let component: VistaBultoProductoPaqueteComponent;
  let fixture: ComponentFixture<VistaBultoProductoPaqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaBultoProductoPaqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaBultoProductoPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
