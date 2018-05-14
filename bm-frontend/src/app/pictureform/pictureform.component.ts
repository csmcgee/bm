import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'picture-form',
  templateUrl: './pictureform.component.html',
  styleUrls: ['./pictureform.component.scss']
})
export class PictureformComponent implements OnInit {

  pictureForm: FormGroup;
  pictures: FileList;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.pictures = files;
  }

  onSubmit() {
  }

  private createForm() {
    this.pictureForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
}
