import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieService } from 'src/app/Service/MovieServiece';
import { Movie } from 'src/app/Modal/movie.model';
import { CookieService } from 'ngx-cookie-service';
import { SerialService } from 'src/app/Service/SerialService';
import { Serial } from 'src/app/Modal/serial.model';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  page: any = 1;
  search = '';
  movielist = [];
  total = 0;
  cat = '';
  seriallist = [];
  formdata: FormData;
  selectedmoviesIds: any = [];
  public myForm: FormGroup;

  constructor(
    private spinner: NgxSpinnerService,
    private ms: MovieService,
    public coo: CookieService,
    private router: Router,
    private ss: SerialService,
    private formBuilder: FormBuilder
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
      }
    } else {
      this.router.navigateByUrl('/Login');
    }
  }

  pageChanged(i: any) {
    this.onNameChanged(i);
  }
  onChanged(event: any) {
    console.log(event.target.value);
  }
  onNameChanged(i: any) {
    if (this.cat != '') {
      var datas = {
        page: i,
        text: this.search,
        cat: this.cat,
        admin: '1',
      };
      this.ms.postService(this.ms.search(), datas).then((res) => {
        this.spinner.show();
        if (res) {
          this.movielist = res[0].msg;
          this.total = res[0].total / 3;
          this.spinner.hide();
          this.coo.set('search', this.search);
        }
      });
    }
  }

  // TVVVVVVVVVVVVVVVVVVVVVVVVVVVV
  deletetv(i: any) {
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
        let serial = new Serial();
        serial.id = i;
        this.ss.postService(this.ss.deletetv(), serial).then((res) => {
          if (res) {
            this.spinner.hide();
            this.onNameChanged(this.page);
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Sorry to see you go.', 'error');
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
        let serial = new Serial();
        serial.id = i;
        serial.status = result.value;
        this.ss.postService(this.ss.updatetv(), serial).then((res) => {
          if (res) {
            this.spinner.hide();
            this.onNameChanged(this.page);
          }
        });
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
        let serial = new Serial();
        serial.id = i;
        serial.image = result.value;
        this.ss.postService(this.ss.updatetv(), serial).then((res) => {
          if (res) {
            this.spinner.hide();
            this.onNameChanged(this.page);
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
        let serial = new Serial();
        serial.id = i;
        serial.language = result.value;
        this.ss.postService(this.ss.updatetv(), serial).then((res) => {
          if (res) {
            this.spinner.hide();
            this.onNameChanged(this.page);
          }
        });
      }
    });
  }

  updatepackname(i: any, name: any) {
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
        let serial = new Serial();
        serial.id = i;
        serial.name = result.value;
        this.ss.postService(this.ss.updatetv(), serial).then((res) => {
          if (res) {
            this.spinner.hide();
            this.onNameChanged(this.page);
          }
        });
      } else {
        Swal.fire(`Request failed`);
      }
    });
  }

  viewtv(i: any) {
    this.spinner.show();
    let serial = new Serial();
    serial.page = i;
    this.ss.postService(this.ss.viewtv(), serial).then((res) => {
      if (res) {
        console.log(res);
        this.seriallist = res[0].msg;
        this.total = res[0].total / 3;
        this.spinner.hide();
      }
    });
  }

  Upload(event: any, i: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        let url = (<FileReader>event.target).result;
      };
      reader.readAsDataURL(event.target.files[0]);
      this.formdata = new FormData();
      this.formdata.append('file', event.target.files[0]);
      this.formdata.append('id', i);
      this.ss
        .postService(this.ss.uploadEpisodeByExcel(), this.formdata)
        .then((result) => {
          if (result) {
            console.log(i);
          }
        });
    }
  }

  download(i: any) {
    var a = 'http://localhost:8080/downloadEpisodeInExcel?id=' + i;
    window.location.href = a;
  }

  // MOVIEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

  updateImageM(i: any, image: any) {
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
            this.spinner.hide();
            this.onNameChanged(this.page);
          }
        });
      } else {
        Swal.fire(`Request failed`);
      }
    });
  }

  updateLanguageM(i: any, lang: any) {
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
            this.spinner.hide();
            this.onNameChanged(this.page);
          }
        });
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
            this.spinner.hide();
            this.onNameChanged(this.page);
          }
        });
      }
    });
  }

  updateStatusM(i: any, status: any) {
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
            this.spinner.hide();
            this.onNameChanged(this.page);
          }
        });
      }
    });
  }

  updateName(i: any, name: any) {
    Swal.fire({
      title: 'Update Nameg',
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
            console.log(res);
            this.spinner.hide();
            this.onNameChanged(this.page);
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
            this.spinner.hide();
            this.onNameChanged(this.page);
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
                this.spinner.hide();
                this.selectedmoviesIds = [];
                this.myForm.reset();
                this.spinner.hide();
                Swal.fire('Removed!', 'Movies has removed.', 'success');
                this.spinner.hide();
                this.ngOnInit();
                this.search = this.coo.get('search');
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
