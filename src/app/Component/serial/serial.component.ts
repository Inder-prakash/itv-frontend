import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import { Serial } from 'src/app/Modal/serial.model';
import { SerialService } from 'src/app/Service/SerialService';

@Component({
  selector: 'app-serial',
  templateUrl: './serial.component.html',
  styleUrls: ['./serial.component.css']
})
export class SerialComponent implements OnInit {

  page = 1;
  serialList = [];
  total = 0;

  constructor(private spinner: NgxSpinnerService,private ss:SerialService) { }

  ngOnInit(): void {
    this.getTvByStatus(1);
  }

  pageChanged(i: any) {
    this.getTvByStatus(i);
  }
  
  getTvByStatus(i:any) {
    let serial = new Serial();
    serial.status = "Public";
    serial.page = i-1;
    this.ss.postService(this.ss.getTvByStatus(), serial).then(res => {
      if (res) {
        this.serialList = res[0].msg;
        this.total = res[0].total;
        this.spinner.hide();
      }
    });
  }
}
