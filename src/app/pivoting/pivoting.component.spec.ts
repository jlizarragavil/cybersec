import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotingComponent } from './pivoting.component';

describe('PivotingComponent', () => {
  let component: PivotingComponent;
  let fixture: ComponentFixture<PivotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PivotingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PivotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
