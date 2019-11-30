import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionGeneralBultoComponent } from './informacion-general-bulto.component';

describe('InformacionGeneralBultoComponent', () => {
  let component: InformacionGeneralBultoComponent;
  let fixture: ComponentFixture<InformacionGeneralBultoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionGeneralBultoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionGeneralBultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
