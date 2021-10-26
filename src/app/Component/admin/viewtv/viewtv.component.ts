import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SerialService } from 'src/app/Service/SerialService';
import { Serial } from 'src/app/Modal/serial.model';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-viewtv',
  templateUrl: './viewtv.component.html',
  styleUrls: ['./viewtv.component.css'],
})
export class ViewtvComponent implements OnInit {
  page: any = 1;
  seriallist = [];
  total = 0;

  constructor(
    private spinner: NgxSpinnerService,
    private ss: SerialService,
    public coo: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.coo.get('UserName') != '') {
      if (this.coo.get('Role').localeCompare('Admin')) {
        this.router.navigateByUrl('/movies');
      } else {
        this.viewtv(this.page);
      }
    } else {
      this.router.navigateByUrl('/Login');
    }
  }

  pageChanged(i: any) {
    this.viewtv(i);
  }

  viewtv(i: any) {
    this.spinner.show();
    let serial = new Serial();
    serial.page = i;
    this.ss.postService(this.ss.viewtv(), serial).then((res) => {
      if (res) {
        this.seriallist = res[0].msg;
        this.total = res[0].total / 3;
        this.spinner.hide();
      }
    });
  }
}
