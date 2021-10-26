import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieCollectionService } from 'src/app/Service/MovieCollectionServiece';
import { Moviepack } from 'src/app/Modal/Moviepack.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from 'src/app/Service/MovieServiece';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-moviepack',
  templateUrl: './moviepack.component.html',
  styleUrls: ['./moviepack.component.css'],
})
export class MoviepackComponent implements OnInit {
  pages = '';
  public sq = [];
  public moviepack = [];

  constructor(
    private spinner: NgxSpinnerService,
    private mc: MovieCollectionService,
    private formBuilder: FormBuilder,
    public coo: CookieService,
    public router: Router,
    public ms: MovieService,
    private sanitization: DomSanitizer,
    public http: HttpClientModule
  ) {}

  ngOnInit(): void {
    console.log(this.coo.get('UserName'));
    if (this.coo.get('UserName') != '') {
      this.getsequals();
    } else {
      this.router.navigateByUrl('/Login');
    }
  }

  getsequals() {
    this.spinner.show();
    this.mc.getService(this.mc.viewmoveiepack()).then((res) => {
      if (res) {
        console.log(res);
        this.moviepack = res.msg;
        this.spinner.hide();
      }
    });
  }
  getmovies(i: any) {
    this.spinner.show();
    let moviepack = new Moviepack();
    moviepack.id = i;
    this.mc
      .postService(this.mc.getmoviesByMoviePack(), moviepack)
      .then((res) => {
        if (res) {
          console.log(res);
          this.sq = res.msg;
          this.spinner.hide();
        }
      });
  }
}
