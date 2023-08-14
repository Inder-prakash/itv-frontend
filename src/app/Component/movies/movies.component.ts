import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieService } from 'src/app/Service/MovieServiece';
import { Movie } from 'src/app/Modal/movie.model';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  page: any = 1;
  search = '';
  movielist = [];
  total = 0;
  username = '';

  constructor(
    private spinner: NgxSpinnerService,
    private ms: MovieService,
    public coo: CookieService,
    public router: Router
  ) {}

  datas: any;

  @Output() dataChange = new EventEmitter();

  @Input()
  get data() {
    return this.datas;
  }

  set data(value: any) {
    this.dataChange.emit(value);
    this.datas = value;
  }

  ngOnInit(): void {
    console.log(this.coo.get('UserName'));
    console.log(this.coo.get('Role'));
    if (this.coo.get('UserName') != '') {
      this.username = this.coo.get('UserName');
    } else {
      this.router.navigateByUrl('/Login');
    }
  }

  logout() {
    this.coo.deleteAll('/');
    this.router.navigateByUrl('/Login');
  }
  // moviesByStatus(i:any) {
  //   this.spinner.show();
  //   let movie = new Movie();
  //   movie.status = "Public";
  //   movie.page = i;
  //   this.ms.postService(this.ms.MovieByStatus(), movie).then(res => {
  //     if (res) {
  //       this.movielist = res[0].msg;
  //       this.total = res[0].total/3;
  //       this.spinner.hide();
  //     }
  //   });
  // }

  // movieByLanguage(l: any) {
  //   this.coo.set("lang", l);
  //   this.coo.set("gen", "");
  //   this.coo.set("status", "");
  //   this.spinner.show();
  //   let movie = new Movie();
  //   movie.page = this.coo.get("page");
  //   movie.status = "Public";
  //   movie.language = l;
  //   this.ms.postService(this.ms.MovieByLanguage(), movie).then(res => {
  //     if (res) {
  //       console.log(res[0].total);
  //       console.log(res[0].msg);
  //       this.movielist = res[0].msg;
  //       this.total = res[0].total/3;
  //       this.spinner.hide();
  //     }
  //   });
  // }

  // movieByCategories(g: any) {
  //   this.coo.set("gen", g);
  //   this.coo.set("lang", "");
  //   this.coo.set("status", "");
  //   this.spinner.show();
  //   let movie = new Movie();
  //   movie.page = this.coo.get("page");
  //   movie.status = "Public";
  //   movie.genere = g;
  //   this.ms.postService(this.ms.MovieByCategories(), movie).then(res => {
  //     if (res) {
  //       console.log(res[0].total);
  //       console.log(res[0].msg);
  //       this.movielist = res[0].msg;
  //       this.total = res[0].total/3;
  //       this.spinner.hide();
  //     }
  //   });
  // }
}
