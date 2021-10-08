import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {SecurityService} from 'src/app/Service/SecurityService';
import { CookieService } from "ngx-cookie-service";
import {Form} from "src/app/Modal/Form";
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public path = "url('assets/images/bg.jpg')";
  constructor(public coo:CookieService , 
              public sec:SecurityService, 
              public router:Router , 
              private sanitization:DomSanitizer) { }

  public image = this.sanitization.bypassSecurityTrustStyle(this.path);

  ngOnInit() {

    console.log("AESE");
      if(localStorage.getItem("UserName") != null ) {

      }
      else{
        this.router.navigateByUrl('/Login');
      }
    }
}
