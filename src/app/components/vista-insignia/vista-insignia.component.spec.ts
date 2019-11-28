import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaInsigniaComponent } from './vista-insignia.component';

describe('VistaInsigniaComponent', () => {
  let component: VistaInsigniaComponent;
  let fixture: ComponentFixture<VistaInsigniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaInsigniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaInsigniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
