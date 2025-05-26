import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customerform2',
  imports: [CommonModule],
  templateUrl: './customerform2.component.html',
  styleUrl: './customerform2.component.css'
})
export class Customerform2Component {
  imageBase64: string = '';
  docBase64: string = '';
  isPDFFile: boolean = false;
  onImageSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.convertToBase64(file).then(
        (base64) => (this.imageBase64 = base64),
        (err) => console.error('Image conversion failed', err)
      );
    }
  }

  onDocumentSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.isPDFFile = file.type === 'application/pdf';

      this.convertToBase64(file).then(
        (base64) => {(this.docBase64 = base64)
          console.log(base64);
        },
        (err) => console.error('Document conversion failed', err)
      );
    }
  }

  convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result as string);
      console.log(reader);
      reader.onerror = (err) => reject(err);

    });
  }
}
