import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { MovieService } from 'src/app/Service/MovieServiece';
import { Movie } from 'src/app/Modal/movie.model';

@Component({
  selector: 'app-english-movies',
  templateUrl: './english-movies.component.html',
  styleUrls: ['./english-movies.component.css']
})
export class EnglishMoviesComponent implements OnInit {

        page: any = 1;
  movielist = [];
  total = 0;
  constructor(private spinner: NgxSpinnerService, private ms: MovieService,) { }

   ngOnInit(): void {
    this.movieByLanguage(this.page);
  }

 pageChanged(i: any) {
    this.movieByLanguage(i);
  }
    movieByLanguage(i:any) {
    this.spinner.show();
    let movie = new Movie();
    movie.status = "Public";
      movie.page = i;
      movie.language = "English";
    this.ms.postService(this.ms.MovieByLanguage(), movie).then(res => {
      if (res) {
        this.movielist = res[0].msg;
        this.total = res[0].total;
        this.spinner.hide();
      }
    });
  }
}
