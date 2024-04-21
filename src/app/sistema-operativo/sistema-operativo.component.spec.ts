import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaOperativoComponent } from './sistema-operativo.component';

describe('SistemaOperativoComponent', () => {
  let component: SistemaOperativoComponent;
  let fixture: ComponentFixture<SistemaOperativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaOperativoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SistemaOperativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
