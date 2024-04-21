import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivescComponent } from './privesc.component';

describe('PrivescComponent', () => {
  let component: PrivescComponent;
  let fixture: ComponentFixture<PrivescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivescComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
