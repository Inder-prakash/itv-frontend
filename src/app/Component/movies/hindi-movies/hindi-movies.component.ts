import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieService } from 'src/app/Service/MovieServiece';
import { Movie } from 'src/app/Modal/movie.model';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hindi-movies',
  templateUrl: './hindi-movies.component.html',
  styleUrls: ['./hindi-movies.component.css'],
})
export class HindiMoviesComponent implements OnInit {
  page: any = 1;
  movielist = [];
  total = 0;
  constructor(
    private spinner: NgxSpinnerService,
    private ms: MovieService,
    public coo: CookieService,
    public router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.coo.get('UserName'));
    if (this.coo.get('UserName') != '') {
      this.movieByLanguage(this.page);
    } else {
      this.router.navigateByUrl('/Login');
    }
  }

  pageChanged(i: any) {
    this.movieByLanguage(i);
  }
  movieByLanguage(i: any) {
    this.spinner.show();
    let movie = new Movie();
    movie.status = 'Public';
    movie.page = i;
    movie.language = 'Hindi';
    this.ms.postService(this.ms.MovieByLanguage(), movie).then((res) => {
      if (res) {
        this.movielist = res[0].msg;
        this.total = res[0].total / 3;
        this.spinner.hide();
      }
    });
  }
}
