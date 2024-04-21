import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircrackComponent } from './aircrack.component';

describe('AircrackComponent', () => {
  let component: AircrackComponent;
  let fixture: ComponentFixture<AircrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AircrackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AircrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
