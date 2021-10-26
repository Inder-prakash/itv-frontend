import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SerialService } from 'src/app/Service/SerialService';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Serial } from 'src/app/Modal/serial.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-addtv',
  templateUrl: './addtv.component.html',
  styleUrls: ['./addtv.component.css'],
})
export class AddtvComponent implements OnInit {
  public myForm: FormGroup;
  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }
  constructor(
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    public coo: CookieService,
    public router: Router,
    public ss: SerialService,
    private sanitization: DomSanitizer,
    public http: HttpClientModule
  ) {
    this.myForm = formBuilder.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      Language: ['', [Validators.required]],
      Status: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (this.coo.get('UserName') != '') {
      if (this.coo.get('Role').localeCompare('Admin')) {
        this.router.navigateByUrl('/movies');
      } else {
      }
    } else {
      this.router.navigateByUrl('/Login');
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.myForm.invalid) {
      return;
    }
    this.spinner.show();
    let serial = new Serial();
    serial.name = this.myForm.value.name;
    serial.image = this.myForm.value.image;
    serial.language = this.myForm.value.Language;
    serial.status = this.myForm.value.Status;
    this.ss.postService(this.ss.addserial(), serial).then((res) => {
      if (res) {
        console.log(res);
        this.myForm.reset();
        this.spinner.hide();
        this.submitted = false;
      }
    });
  }
}
