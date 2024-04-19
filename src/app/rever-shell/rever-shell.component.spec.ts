import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverShellComponent } from './rever-shell.component';

describe('ReverShellComponent', () => {
  let component: ReverShellComponent;
  let fixture: ComponentFixture<ReverShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReverShellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReverShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
