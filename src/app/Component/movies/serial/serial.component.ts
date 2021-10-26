import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SerialService } from 'src/app/Service/SerialService';
import { Serial } from 'src/app/Modal/serial.model';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serial',
  templateUrl: './serial.component.html',
  styleUrls: ['./serial.component.css'],
})
export class SerialComponent implements OnInit {
  page: any = 1;
  seriallist = [];
  total = 0;

  constructor(
    private spinner: NgxSpinnerService,
    private ss: SerialService,
    public coo: CookieService,
    public router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.coo.get('UserName'));
    if (this.coo.get('UserName') != '') {
      this.getTvByStatus(this.page);
    } else {
      this.router.navigateByUrl('/Login');
    }
  }

  pageChanged(i: any) {
    this.getTvByStatus(i);
  }
  getTvByStatus(i: any) {
    this.spinner.show();
    let serial = new Serial();
    serial.status = 'Public';
    serial.page = i;
    this.ss.postService(this.ss.getTvByStatus(), serial).then((res) => {
      if (res) {
        console.log(res);
        this.seriallist = res[0].msg;
        this.total = 62 / 3;
        this.spinner.hide();
      }
    });
  }
}
