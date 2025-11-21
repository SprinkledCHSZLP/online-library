import { Component, ElementRef, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dialog-add-book',
  templateUrl: 'dialog-add-book.html',
  styleUrl: 'dialog-add-book.scss',
  imports: [MatDialogTitle, MatDialogContent, MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, FormsModule],
})
export class DialogAddBook {
  @Output() addSend: EventEmitter<{name: string, description: string, logo: File | null }> = new EventEmitter<{name: string, description: string, logo: File | null }>()

  name = ''
  description = ''
  fileImg = null

  @ViewChild('UploadFileInput')
  uploadFileInput!: ElementRef;
  myfilename = 'Выберите файл';
  send: any;

  sendData() {
    let component = {
      name: this.name,
      description: this.description,
      logo: this.fileImg
    }
    this.addSend.emit(component)
  }

  fileChangeEvent(fileInput: any) {

    if (fileInput.target.files && fileInput.target.files[0]) {


      this.myfilename = '';
      Array.from(fileInput.target.files).forEach((file: any) => {
        this.myfilename += file.name + ',';
      });

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {

          const imgBase64Path = e.target.result;
          this.fileImg = imgBase64Path

        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);

      this.uploadFileInput.nativeElement.value = "";
    } else {
      this.myfilename = 'Выберите файл';
    }
  }

}