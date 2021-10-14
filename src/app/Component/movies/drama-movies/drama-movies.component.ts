import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { MovieService } from 'src/app/Service/MovieServiece';
import { Movie } from 'src/app/Modal/movie.model';

@Component({
  selector: 'app-drama-movies',
  templateUrl: './drama-movies.component.html',
  styleUrls: ['./drama-movies.component.css']
})
export class DramaMoviesComponent implements OnInit {

        page: any = 1;
  movielist = [];
  total = 0;
  constructor(private spinner: NgxSpinnerService, private ms: MovieService,) { }

      ngOnInit(): void {
    this.movieByCategories(this.page);
  }

 pageChanged(i: any) {
    this.movieByCategories(i);
  }

      movieByCategories(i:any) {
    this.spinner.show();
    let movie = new Movie();
    movie.status = "Public";
        movie.page = i;
        movie.genere = "Drama";
    this.ms.postService(this.ms.MovieByCategories(), movie).then(res => {
      if (res) {
        this.movielist = res[0].msg;
        this.total = res[0].total;
        this.spinner.hide();
      }
    });
  }

}
