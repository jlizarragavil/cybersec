import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnrestrictedFileUploadComponent } from './unrestricted-file-upload.component';

describe('UnrestrictedFileUploadComponent', () => {
  let component: UnrestrictedFileUploadComponent;
  let fixture: ComponentFixture<UnrestrictedFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnrestrictedFileUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnrestrictedFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
