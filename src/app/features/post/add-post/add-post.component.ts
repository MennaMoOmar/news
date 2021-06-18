import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  /*validation post*/
  myForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(150),
      Validators.minLength(3),
    ]),
  });

  /*add post*/
  addpost() {
    console.log('added');
  }
}
