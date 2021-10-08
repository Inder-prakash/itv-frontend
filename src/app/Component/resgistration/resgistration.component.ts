import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { SingupService } from '../../Service/Signup';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router'
import { NgxSpinnerService } from "ngx-spinner";
import { Users } from 'src/app/Modal/users.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-resgistration',
  templateUrl: './resgistration.component.html',
  styleUrls: ['./resgistration.component.css']
})

export class ResgistrationComponent implements OnInit {

  public myForm: FormGroup;
  public path = "url('assets/images/body-bg.jpg')";
  public image = this.sanitization.bypassSecurityTrustStyle(this.path);
  public path2 = "url('assets/images/container-bg.png')";
  public image2 = this.sanitization.bypassSecurityTrustStyle(this.path2);

  constructor(private spinner: NgxSpinnerService, private formBuilder: FormBuilder,
    public router: Router, private sanitization: DomSanitizer,
  public http:HttpClientModule,public sign:SingupService ) {
    this.myForm = formBuilder.group({
      username: [''],password:[''],email:['']
    });
  };

  
  ngOnInit() {
    // this.createFormControls();
    // this.createForm();
  }

    onSubmit() {
      let user = new Users();
      user.username = this.myForm.value.userName;
      user.password = this.myForm.value.password;
      user.email = this.myForm.value.email;
      this.sign.postService(this.sign.singup(), user).then(res => {
        if (res) {
          console.log(res);
        }
      });
  }

  // myform:FormGroup;
  // username:FormControl;
  // email:FormControl;
  // password:FormControl;
  // confirmed:FormControl;
  // aggrement:FormControl;
  
  // createFormControls() {
  //   this.username = new FormControl("", [
  //     Validators.required,
  //     Validators.minLength(4),
  //     Validators.maxLength(10)
  //   ]);
  //   this.email=new FormControl("",[
  //     Validators.required,
  //     Validators.pattern("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")
  //   ]);
    
  //   this.password=new FormControl("",[
  //     Validators.required,
  //     Validators.pattern("(?=.*)(?=.*[a-z])(?=.*[A-Z]).{8,}"),
  //   ]);

  //   this.confirmed=new FormControl("",[
  //     Validators.required
  //   ]);
  
  //   this.aggrement = new FormControl("",[
  //     Validators.required
  //   ]);
  // }

  // createForm() {
  //   this.myform = new FormGroup({
  //       username: this.username,
  //       email:this.email,
  //       password:this.password,
  //       confirmed:this.confirmed,
  //       aggrement:this.aggrement  
  //   });
  // }

  //  show() {
  //    this.spinnerService.show();
  //    var user = new Form(
  //      this.myform.value.username,
  //      this.myform.value.email,
  //      this.myform.value.password,
  //      null,null
  //      );
     
  //    this.singup.postService(this.singup.singup(),user).then(result=>{
  //     if(result.msg == "Success"){
  //       this.spinnerService.hide();
  //       Swal.fire({type: 'success',title: '',text: 'Wait for approval from admin'})
  //       this.myform.reset();
  //     }
  //     else {
  //       this.spinnerService.hide();
  //       Swal.fire({type: 'error',title: 'Oops...',text: 'User Aleready Exists !!'});
  //     }
  //    }) 
  //  }
}
