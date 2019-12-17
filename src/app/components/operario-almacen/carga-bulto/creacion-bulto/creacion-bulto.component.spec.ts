import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionBultoComponent } from './creacion-bulto.component';

describe('CreacionBultoComponent', () => {
  let component: CreacionBultoComponent;
  let fixture: ComponentFixture<CreacionBultoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreacionBultoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionBultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
