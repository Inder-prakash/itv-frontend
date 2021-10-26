import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieCollectionService } from 'src/app/Service/MovieCollectionServiece';
import { Moviepack } from 'src/app/Modal/Moviepack.model';
import { Sequals } from 'src/app/Modal/Sequals.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from 'src/app/Service/MovieServiece';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-addmoviepack',
  templateUrl: './addmoviepack.component.html',
  styleUrls: ['./addmoviepack.component.css'],
})
export class AddmoviepackComponent implements OnInit {
  movies = [];
  public myForm: FormGroup;

  index: any;
  name: any;
  baseid: any;
  fieldArray: Array<any> = [];
  sequalsIds: any = [];
  newAttribute: any = {};
  firstField = true;
  isEditItems: boolean;

  constructor(
    private spinner: NgxSpinnerService,
    private mc: MovieCollectionService,
    private formBuilder: FormBuilder,
    public coo: CookieService,
    public router: Router,
    public ms: MovieService,
    private sanitization: DomSanitizer,
    public http: HttpClientModule
  ) {}

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

  getsequals() {
    this.spinner.show();
    this.mc.getService(this.mc.viewmoveiepack()).then((res) => {
      if (res) {
        console.log(res);
        this.movies = res.msg;
        this.spinner.hide();
      }
    });
  }

  addFieldValue(index: any) {
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
  }

  deleteFieldValue(index: any) {
    this.fieldArray.splice(index, 1);
  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
  }

  onSubmit() {
    console.log(this.fieldArray);
  }
  viewmoveiepack() {}

  newcollection() {
    if (this.name == '') {
      Swal.fire('Enter MovieCollection Name');
      return;
    }
    this.spinner.show();
    let moviepack = new Moviepack();
    moviepack.name = this.name;
    this.mc.postService(this.mc.newcollection(), moviepack).then((res) => {
      if (res) {
        this.name = '';
        this.getsequals();
        this.spinner.hide();
      }
    });
  }
  newsequals() {
    this.spinner.show();
    for (var c of this.fieldArray) {
      this.sequalsIds.push(c.name);
    }
    let sequals = new Sequals();
    sequals.baseid = this.baseid;
    sequals.movieid = this.sequalsIds;
    this.mc.postService(this.mc.newsequals(), sequals).then((res) => {
      if (res) {
        this.name = '';
        this.getsequals();
        this.fieldArray = [];
        this.spinner.hide();
      }
    });
  }
}
