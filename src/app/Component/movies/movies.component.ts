import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import { MovieService } from 'src/app/Service/MovieServiece';
import { Movie } from 'src/app/Modal/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  page = 1;
  movielist = [];
  total = 0;
  constructor(private spinner: NgxSpinnerService, private ms: MovieService) { }

  ngOnInit(): void {
    this.moviesByStatus(1);
  }

  // setmovie(id: any, name: any, image: any, Language: any,
  //   Status: any, Size: any, Genere: any, Discription: any,
  //   Link: any) {
  //   let movie = new Movie();movie.id = id;movie.name = name;movie.image = image;
  //   movie.language = Language; movie.status = Status; movie.size = Size; movie.genere = Genere;
  //   movie.discription = Discription;movie.link = Link;
  //   return movie;
  // }

  pageChanged(i: any) {
    this.moviesByStatus(i);
  }
  
  moviesByStatus(i:any) {
    let movie = new Movie();
    movie.status = "Public";
    movie.page = i-1;
    this.ms.postService(this.ms.MovieByStatus(), movie).then(res => {
      if (res) {
        this.movielist = res[0].msg;
        this.total = res[0].total;
        this.spinner.hide();
      }
    });
  }


}
