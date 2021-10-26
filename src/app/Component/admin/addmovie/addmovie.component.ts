import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from 'src/app/Service/MovieServiece';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Movie } from 'src/app/Modal/movie.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css'],
})
export class AddmovieComponent implements OnInit {
  public myForm: FormGroup;
  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  constructor(
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    public coo: CookieService,
    public router: Router,
    public ms: MovieService,
    private sanitization: DomSanitizer,
    public http: HttpClientModule
  ) {
    this.myForm = formBuilder.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      size: ['', [Validators.required]],
      link: ['', [Validators.required]],
      Language: ['', [Validators.required]],
      Status: ['', [Validators.required]],
      Genere: ['', [Validators.required]],
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

  onSubmit() {
    this.submitted = true;

    if (this.myForm.invalid) {
      return;
    }
    this.spinner.show();
    let movie = new Movie();
    movie.name = this.myForm.value.name;
    movie.image = this.myForm.value.image;
    movie.size = this.myForm.value.size;
    movie.link = this.myForm.value.link;
    movie.language = this.myForm.value.Language;
    movie.status = this.myForm.value.Status;
    movie.genere = this.myForm.value.Genere;
    this.ms.postService(this.ms.AddMovie(), movie).then((res) => {
      if (res) {
        console.log(res);
        this.myForm.reset();
        this.spinner.hide();
        this.submitted = false;
      }
    });
  }
}
