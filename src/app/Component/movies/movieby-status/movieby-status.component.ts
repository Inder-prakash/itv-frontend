import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieService } from 'src/app/Service/MovieServiece';
import { Movie } from 'src/app/Modal/movie.model';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movieby-status',
  templateUrl: './movieby-status.component.html',
  styleUrls: ['./movieby-status.component.css'],
})
export class MoviebyStatusComponent implements OnInit {
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
      this.moviesByStatus(this.page);
    } else {
      this.router.navigateByUrl('/Login');
    }
  }

  pageChanged(i: any) {
    this.moviesByStatus(i);
  }
  moviesByStatus(i: any) {
    this.spinner.show();
    let movie = new Movie();
    movie.status = 'Public';
    movie.page = i;
    this.ms.postService(this.ms.MovieByStatus(), movie).then((res) => {
      if (res) {
        console.log(res);

        this.movielist = res[0].msg;
        this.total = res[0].total / 3;
        this.spinner.hide();
      }
    });
  }
}
