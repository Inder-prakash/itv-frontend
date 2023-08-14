import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieService } from 'src/app/Service/MovieServiece';
import { Movie } from 'src/app/Modal/movie.model';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-action-movies',
  templateUrl: './action-movies.component.html',
  styleUrls: ['./action-movies.component.css'],
})
export class ActionMoviesComponent implements OnInit {
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
      this.movieByCategories(this.page);
    } else {
      this.router.navigateByUrl('/Login');
    }
  }

  pageChanged(i: any) {
    this.movieByCategories(i);
  }

  movieByCategories(i: any) {
    this.spinner.show();
    let movie = new Movie();
    movie.status = 'Public';
    movie.page = i;
    movie.genere = 'Action';
    this.ms.postService(this.ms.MovieByCategories(), movie).then((res) => {
      if (res) {
        this.movielist = res[0].msg;
        this.total = res[0].total / 3;
        this.spinner.hide();
      }
    });
  }
}
