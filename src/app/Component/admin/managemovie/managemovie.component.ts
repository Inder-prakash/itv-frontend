import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieService } from 'src/app/Service/MovieServiece';
import { Movie } from 'src/app/Modal/movie.model';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-managemovie',
  templateUrl: './managemovie.component.html',
  styleUrls: ['./managemovie.component.css'],
})
export class ManagemovieComponent implements OnInit {
  page: any = 1;
  movielist = [];
  total = 0;
  selectedmoviesIds: any = [];
  public myForm: FormGroup;

  constructor(
    private spinner: NgxSpinnerService,
    private ms: MovieService,
    private formBuilder: FormBuilder,
    public coo: CookieService,
    private router: Router
  ) {
    this.myForm = formBuilder.group({
      checkboxs: [''],
      language: [''],
    });
  }

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
    this.page = i;
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

  updateImage(i: any, image: any) {
    Swal.fire({
      title: 'Update Image',
      input: 'text',
      inputValue: image,
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Update',
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.value) {
        this.spinner.show();
        let movie = new Movie();
        movie.id = i;
        movie.image = result.value;
        this.ms.postService(this.ms.UpdateMovie(), movie).then((res) => {
          if (res) {
            this.ViewMovies(this.page);
          }
        });
      } else {
        Swal.fire(`Request failed`);
      }
    });
  }

  updateLanguage(i: any, lang: any) {
    Swal.fire({
      title: 'Update Language',
      input: 'select',
      inputOptions: {
        Hindi: 'Hindi',
        English: 'English',
      },
      inputPlaceholder: lang,
      showCancelButton: true,
      confirmButtonText: 'Update',
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.value) {
        this.spinner.show();
        let movie = new Movie();
        movie.id = i;
        movie.language = result.value;
        this.ms.postService(this.ms.UpdateMovie(), movie).then((res) => {
          if (res) {
            this.ViewMovies(this.page);
          }
        });
      }
    });
  }

  updateSize(i: any, name: any) {
    Swal.fire({
      title: 'Update Size',
      input: 'text',
      inputValue: name,
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Update',
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.value) {
        this.spinner.show();
        let movie = new Movie();
        movie.id = i;
        movie.size = result.value;
        this.ms.postService(this.ms.UpdateMovie(), movie).then((res) => {
          if (res) {
            this.ViewMovies(this.page);
          }
        });
      } else {
        Swal.fire(`Request failed`);
      }
    });
  }

  updateRes(i: any, name: any) {
    Swal.fire({
      title: 'Update Res',
      input: 'text',
      inputValue: name,
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Update',
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.value) {
        this.spinner.show();
        let movie = new Movie();
        movie.id = i;
        movie.res = result.value;
        this.ms.postService(this.ms.UpdateMovie(), movie).then((res) => {
          if (res) {
            this.ViewMovies(this.page);
          }
        });
      } else {
        Swal.fire(`Request failed`);
      }
    });
  }

  updateLink(i: any, name: any) {
    Swal.fire({
      title: 'Update Links',
      input: 'text',
      inputValue: name,
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Update',
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.value) {
        this.spinner.show();
        let movie = new Movie();
        movie.id = i;
        movie.link = result.value;
        this.ms.postService(this.ms.UpdateMovie(), movie).then((res) => {
          if (res) {
            this.ViewMovies(this.page);
          }
        });
      } else {
        Swal.fire(`Request failed`);
      }
    });
  }

  updateGenere(i: any, genere: any) {
    Swal.fire({
      title: 'Update Genere',
      input: 'select',
      inputOptions: {
        Comedy: 'Comedy',
        SciFi: 'Sci-Fi',
        Horror: 'Horror',
        Romance: 'Romance',
        Action: 'Action',
        Drama: 'Drama',
        Animation: 'Animation',
        Adventure: 'Adventure',
        Crime: 'Crime',
      },
      inputPlaceholder: genere,
      showCancelButton: true,
      confirmButtonText: 'Update',
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.value) {
        this.spinner.show();
        let movie = new Movie();
        movie.id = i;
        movie.genere = result.value;
        this.ms.postService(this.ms.UpdateMovie(), movie).then((res) => {
          if (res) {
            this.ViewMovies(this.page);
          }
        });
      }
    });
  }

  updateStatus(i: any, status: any) {
    Swal.fire({
      title: 'Update Status',
      input: 'select',
      inputOptions: {
        Public: 'Public',
        Private: 'Private',
      },
      inputPlaceholder: status,
      showCancelButton: true,
      confirmButtonText: 'Update',
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.value) {
        this.spinner.show();
        let movie = new Movie();
        movie.id = i;
        movie.status = result.value;
        this.ms.postService(this.ms.UpdateMovie(), movie).then((res) => {
          if (res) {
            this.ViewMovies(this.page);
          }
        });
      }
    });
  }

  updateName(i: any, name: any) {
    Swal.fire({
      title: 'Update Name',
      input: 'text',
      inputValue: name,
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Update',
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.value) {
        this.spinner.show();
        let movie = new Movie();
        movie.id = i;
        movie.name = result.value;
        this.ms.postService(this.ms.UpdateMovie(), movie).then((res) => {
          if (res) {
            this.ViewMovies(this.page);
          }
        });
      } else {
        Swal.fire(`Request failed`);
      }
    });
  }

  onChange(i: any) {
    console.log(this.myForm.value.checkboxs);
    if (this.myForm.value.checkboxs == true) {
      this.selectedmoviesIds.push(i);
    }
    if (this.myForm.value.checkboxs == false) {
      this.selectedmoviesIds.splice(this.selectedmoviesIds.indexOf(i), 1);
    }
  }

  delete(i: any) {
    console.log(i);
    let del: any = [];
    del.push(i);
    Swal.fire({
      title: 'Are You Sure',
      text: 'Delete this Movie',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        this.spinner.show();
        this.ms.postService(this.ms.deleteselected(), del).then((res) => {
          if (res) {
            this.ViewMovies(this.page);
            this.spinner.hide();
            Swal.fire('Removed!', 'Movies has removed.', 'success');
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Sorry to see you go.', 'error');
      }
    });
  }

  deleteselected() {
    if (this.selectedmoviesIds.length > 0) {
      Swal.fire({
        title: 'Are You Sure',
        text: 'Deleted Selected Movies',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ok',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.value) {
          this.spinner.show();
          this.ms
            .postService(this.ms.deleteselected(), this.selectedmoviesIds)
            .then((res) => {
              if (res) {
                this.ViewMovies(this.page);
                this.selectedmoviesIds = [];
                this.myForm.reset();
                this.spinner.hide();
                Swal.fire('Removed!', 'Movies has removed.', 'success');
              }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('Cancelled', 'Sorry to see you go.', 'error');
          this.myForm.reset();
        }
      });
    } else {
      Swal.fire('Error', 'No Movie selected.', 'error');
    }
  }
}