import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconocimientoWebComponent } from './reconocimiento-web.component';

describe('ReconocimientoWebComponent', () => {
  let component: ReconocimientoWebComponent;
  let fixture: ComponentFixture<ReconocimientoWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReconocimientoWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReconocimientoWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
