import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieService } from 'src/app/Service/MovieServiece';
import { Movie } from 'src/app/Modal/movie.model';
import { CookieService } from 'ngx-cookie-service';
import { SerialService } from 'src/app/Service/SerialService';
import { Serial } from 'src/app/Modal/serial.model';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-serch-result',
  templateUrl: './serch-result.component.html',
  styleUrls: ['./serch-result.component.css'],
})
export class SerchResultComponent implements OnInit {
  page: any = 1;
  search = '';
  movielist = [];
  total = 0;
  cat = '';
  seriallist = [];

  public myForm: FormGroup;
  constructor(
    private spinner: NgxSpinnerService,
    private ms: MovieService,
    public coo: CookieService,
    private router: Router,
    private ss: SerialService,
    private formBuilder: FormBuilder
  ) {}
  pageChanged(i: any) {
    this.onNameChanged(i);
  }
  onChanged(event: any) {
    console.log(event.target.value);
  }
  onNameChanged(i: any) {
    if (this.cat != '') {
      var datas = {
        page: i,
        text: this.search,
        cat: this.cat,
        admin: '0',
      };
      this.ms.postService(this.ms.search(), datas).then((res) => {
        this.spinner.show();
        if (res) {
          this.movielist = res[0].msg;
          this.total = res[0].total / 3;
          this.spinner.hide();
        }
      });
    }
  }
  ngOnInit(): void {
    console.log(this.coo.get('UserName'));
    if (this.coo.get('UserName') != '') {
    } else {
      this.router.navigateByUrl('/Login');
    }
  }
}
