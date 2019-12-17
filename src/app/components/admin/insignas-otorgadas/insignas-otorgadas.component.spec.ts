import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsignasOtorgadasComponent } from './insignas-otorgadas.component';

describe('InsignasOtorgadasComponent', () => {
  let component: InsignasOtorgadasComponent;
  let fixture: ComponentFixture<InsignasOtorgadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsignasOtorgadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsignasOtorgadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
