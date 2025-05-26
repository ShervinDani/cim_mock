import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Customerform2Component } from './customerform2.component';

describe('Customerform2Component', () => {
  let component: Customerform2Component;
  let fixture: ComponentFixture<Customerform2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Customerform2Component]
    }).compileComponents();

    fixture = TestBed.createComponent(Customerform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should handle image selection and convert to Base64', async () => {
    const mockFile = new File(['dummy'], 'image.png', { type: 'image/png' });
    const base64 = await component.convertToBase64(mockFile);
    expect(base64).toContain('data:image/png;base64');
  });

  it('should handle document selection and convert to Base64', async () => {
    const mockFile = new File(['dummy'], 'file.pdf', { type: 'application/pdf' });
    const base64 = await component.convertToBase64(mockFile);
    expect(base64).toContain('data:application/pdf;base64');
  });
});
