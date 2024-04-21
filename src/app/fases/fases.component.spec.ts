import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasesComponent } from './fases.component';

describe('FasesComponent', () => {
  let component: FasesComponent;
  let fixture: ComponentFixture<FasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FasesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
