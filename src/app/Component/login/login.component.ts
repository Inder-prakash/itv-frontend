import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import {LoginService} from '../../Service/LoginService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import {Router} from '@angular/router'
import { CookieService } from "ngx-cookie-service";
import { NgxSpinnerService } from "ngx-spinner";
import { Users } from 'src/app/Modal/users.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  public myForm: FormGroup;
  public path = "url('assets/images/body-bg.jpg')";
  public image = this.sanitization.bypassSecurityTrustStyle(this.path);
  public path2 = "url('assets/images/container-bg.png')";
  public image2 = this.sanitization.bypassSecurityTrustStyle(this.path2);

  constructor(private spinner: NgxSpinnerService, private formBuilder: FormBuilder,
    public coo: CookieService, public router: Router,
    public ls: LoginService, private sanitization: DomSanitizer,
  public http:HttpClientModule ) {
    this.myForm = formBuilder.group({
      email: [''] , password:['']
    });
  };

  

  
  // LoginForm:FormGroup;
  // Email:FormControl;
  // Password:FormControl;
  // public user=[];
  ngOnInit() {
  
    
    // this.createFormControls();
    // this.createForm();
  }
  onSubmit() {
    let user = new Users();
    user.email = this.myForm.value.email;
    user.password = this.myForm.value.password;
    this.ls.postService(this.ls.login(), user).then(res => {
      if (res) {
        console.log(res);
      }
    });
  }

  //  createFormControls() {
  //   this.Email = new FormControl("", [
  //     Validators.required
  //   ]);
  //   this.Password = new FormControl("",[
  //     Validators.required
  //   ]);

  //  }

  //  createForm() {
  //   this.LoginForm = new FormGroup({
  //     Email:this.Email,
  //     Password:this.Password
  //   });   
  // }

  // login() {  
  //   this.spinnerService.show();
  //   var user = new LoginClass(
  //     null,
  //     this.LoginForm.value.Email,
  //     this.LoginForm.value.Password
  //   );

  //   this.ls.postService(this.ls.login(),user).then(result=>{
  //     if(JSON.stringify(result[0].msg).match("Success") ){
  //       this.coo.set("UserName",result[0].username);
  //       this.coo.set("Token",result[0].token);
  //       // localStorage.setItem("UserName",result[0].username);
  //       // localStorage.setItem("Role",result[0].role)
  //       this.spinnerService.hide(); 
  //       this.router.navigateByUrl('/');
  //       if( (result[0].status).match("false")) {
  //         Swal.fire({type: 'error',title: 'Oops...',text: 'Your Account must be active , contact admin'})
  //       }
  //     }
    
  //     else{
  //       this.spinnerService.hide();    
  //        Swal.fire({type: 'error',title: 'Oops...',text: 'UserName and Password Does not matched'})
  //     }
  //   });
  // } 
}
