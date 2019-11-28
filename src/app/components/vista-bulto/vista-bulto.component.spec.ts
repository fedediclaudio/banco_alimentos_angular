import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaBultoComponent } from './vista-bulto.component';

describe('VistaBultoComponent', () => {
  let component: VistaBultoComponent;
  let fixture: ComponentFixture<VistaBultoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaBultoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaBultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
