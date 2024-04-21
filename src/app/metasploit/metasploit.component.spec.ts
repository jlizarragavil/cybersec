import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasploitComponent } from './metasploit.component';

describe('MetasploitComponent', () => {
  let component: MetasploitComponent;
  let fixture: ComponentFixture<MetasploitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetasploitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetasploitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
