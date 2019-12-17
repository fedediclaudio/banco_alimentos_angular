import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoBultoComponent } from './ingreso-bulto.component';

describe('IngresoBultoComponent', () => {
  let component: IngresoBultoComponent;
  let fixture: ComponentFixture<IngresoBultoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoBultoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoBultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
