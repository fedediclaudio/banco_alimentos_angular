import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPaqueteComponent } from './vista-paquete.component';

describe('VistaPaqueteComponent', () => {
  let component: VistaPaqueteComponent;
  let fixture: ComponentFixture<VistaPaqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaPaqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
