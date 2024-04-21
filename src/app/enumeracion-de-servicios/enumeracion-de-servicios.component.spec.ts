import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumeracionDeServiciosComponent } from './enumeracion-de-servicios.component';

describe('EnumeracionDeServiciosComponent', () => {
  let component: EnumeracionDeServiciosComponent;
  let fixture: ComponentFixture<EnumeracionDeServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnumeracionDeServiciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnumeracionDeServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
