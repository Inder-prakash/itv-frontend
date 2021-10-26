import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieService } from 'src/app/Service/MovieServiece';
import { Movie } from 'src/app/Modal/movie.model';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-viewmovie',
  templateUrl: './viewmovie.component.html',
  styleUrls: ['./viewmovie.component.css'],
})
export class ViewmovieComponent implements OnInit {
  page: any = 1;
  movielist = [];
  total = 0;
  constructor(
    private spinner: NgxSpinnerService,
    private ms: MovieService,
    public coo: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.coo.get('UserName') != '') {
      if (this.coo.get('Role').localeCompare('Admin')) {
        this.router.navigateByUrl('/movies');
      } else {
        this.ViewMovies(this.page);
      }
    } else {
      this.router.navigateByUrl('/Login');
    }
  }

  pageChanged(i: any) {
    this.ViewMovies(i);
  }

  ViewMovies(i: any) {
    this.spinner.show();
    let movie = new Movie();
    movie.page = i;
    this.ms.postService(this.ms.ViewMovies(), movie).then((res) => {
      if (res) {
        this.movielist = res[0].msg;
        this.total = res[0].total / 3;
        this.spinner.hide();
      }
    });
  }
}
