import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginService } from '../../Service/LoginService';
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
import { User } from 'src/app/Modal/user.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
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
    public ls: LoginService,
    private sanitization: DomSanitizer,
    public http: HttpClientModule
  ) {
    this.myForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
    });
  }

  // LoginForm:FormGroup;
  // Email:FormControl;
  // Password:FormControl;
  // public user=[];
  ngOnInit() {
    // this.createFormControls();
    // this.createForm();
  }
  onSubmit() {
    this.submitted = true;

    if (this.myForm.invalid) {
      return;
    }

    this.spinner.show();
    let user = new User();
    user.email = this.myForm.value.email;
    user.password = this.myForm.value.password;
    this.ls.postService(this.ls.login(), user).then((res) => {
      if (res) {
        if (res.msg == 'UserName And Password not match') {
          Swal.fire('UserName And Password not matched');
        } else {
          if (res.msg.status != 'true') {
            Swal.fire('Wait For Admin Approval');
          } else {
            this.coo.deleteAll('/');
            this.coo.set('UserName', res.msg.username);
            this.coo.set('Role', res.msg.role);
            this.myForm.reset();
            this.router.navigateByUrl('index');
          }
        }
        this.spinner.hide();
      }
    });
  }
}
