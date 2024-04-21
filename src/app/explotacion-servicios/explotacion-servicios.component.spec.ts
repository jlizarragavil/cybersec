import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplotacionServiciosComponent } from './explotacion-servicios.component';

describe('ExplotacionServiciosComponent', () => {
  let component: ExplotacionServiciosComponent;
  let fixture: ComponentFixture<ExplotacionServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplotacionServiciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExplotacionServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
