import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieCollectionService } from 'src/app/Service/MovieCollectionServiece';
import { Moviepack } from 'src/app/Modal/Moviepack.model';
import { Sequals } from 'src/app/Modal/sequals.model';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-managemoviepack',
  templateUrl: './managemoviepack.component.html',
  styleUrls: ['./managemoviepack.component.css'],
})
export class ManagemoviepackComponent implements OnInit {
  page: any = 1;
  moviepack = [];
  total = 0;
  baseid: any;
  fieldArray: Array<any> = [];
  newAttribute: any = {};
  firstField = true;
  isEditItems: boolean;
  BaseName: any;
  sequalsIds: any = [];
  public myForm: FormGroup;
  constructor(
    public coo: CookieService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private mc: MovieCollectionService,
    private formBuilder: FormBuilder
  ) {
    this.myForm = formBuilder.group({});
  }

  ngOnInit(): void {
    if (this.coo.get('UserName') != '') {
      if (this.coo.get('Role').localeCompare('Admin')) {
        this.router.navigateByUrl('/movies');
      } else {
        this.viewmoveiepack();
      }
    } else {
      this.router.navigateByUrl('/Login');
    }
  }

  addFieldValue() {
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
  }

  deleteFieldValue(index: any) {
    this.fieldArray.splice(index, 1);
  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
  }

  viewmoveiepack() {
    this.mc.getService(this.mc.viewmoveiepack()).then((res) => {
      if (res) {
        this.moviepack = res.msg;
        this.spinner.hide();
      }
    });
  }

  udatesequal(base: any) {
    console.log(base);
    this.spinner.show();
    for (var c of this.fieldArray) {
      this.sequalsIds.push(c.id);
    }
    let sequals = new Sequals();
    sequals.baseid = base;
    sequals.movieid = this.sequalsIds;
    this.mc.postService(this.mc.udatesequal(), sequals).then((res) => {
      if (res) {
        console.log(res);
        this.viewmoveiepack();
        this.baseid = '';
        this.spinner.hide();
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
        let movpck = new Moviepack();
        movpck.id = i;
        movpck.name = result.value;
        this.mc
          .postService(this.mc.updatemoviepackname(), movpck)
          .then((res) => {
            if (res) {
              this.viewmoveiepack();
            }
          });
      } else {
        Swal.fire(`Request failed`);
      }
    });
  }

  deletepack(i: any) {
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
        let movpack = new Moviepack();
        movpack.id = i;
        this.mc.postService(this.mc.deletepack(), movpack).then((res) => {
          if (res) {
            console.log(res);
            this.viewmoveiepack();
            this.spinner.hide();
            Swal.fire('Removed!', 'MoviePack has removed.', 'success');
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Sorry to see you go.', 'error');
      }
    });
  }

  getsequals(i: any, name: any) {
    this.spinner.show();
    let seq = new Sequals();
    seq.baseid = i;
    this.baseid = i;
    this.mc.postService(this.mc.getsequals(), seq).then((result) => {
      if (result) {
        this.spinner.hide();
        this.BaseName = name;
        this.fieldArray = result.msg;
      }
    });
  }
}