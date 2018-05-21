import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'picture-form',
  templateUrl: './pictureform.component.html',
  styleUrls: ['./pictureform.component.scss']
})
export class PictureformComponent implements OnInit {

  pictureForm: FormGroup;
  pictures: FileList;

  constructor(private fb: FormBuilder,
              private http: HttpClient) {
    this.createForm();
  }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.pictures = files;
  }

  onSubmit() {
    var host = 'http://localhost:3000';
    var url = `${host}/complaint/create`;
    var fd = new FormData();


    for(var i = 0; i < this.pictures.length; i++) {
      fd.append('image[]', this.pictures[i], this.pictures[i].name);
    }

    this.http.post(url, fd).subscribe((data: any) => {
      console.log(data);
    });
  }

  private createForm() {
    this.pictureForm = this.fb.group({
      // title: ['', Validators.required],
      // description: ['', Validators.required]
    });
  }
}
