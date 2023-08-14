import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SerialService } from 'src/app/Service/SerialService';
import { Serial } from 'src/app/Modal/serial.model';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-managetv',
  templateUrl: './managetv.component.html',
  styleUrls: ['./managetv.component.css'],
})
export class ManagetvComponent implements OnInit {
  page: any = 1;
  seriallist = [];
  total = 0;
  formdata: FormData;
  constructor(
    private spinner: NgxSpinnerService,
    private ss: SerialService,
    public coo: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.coo.get('UserName') != '') {
      if (this.coo.get('Role').localeCompare('Admin')) {
        this.router.navigateByUrl('/movies');
      } else {
        this.viewtv(this.page);
      }
    } else {
      this.router.navigateByUrl('/Login');
    }
  }

  pageChanged(i: any) {
    this.viewtv(i);
    this.page = i;
  }

  edittv() {}

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
            this.viewtv(this.page);
            this.spinner.hide();
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
            this.viewtv(this.page);
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
            this.viewtv(this.page);
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
            this.viewtv(this.page);
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
            this.viewtv(this.page);
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
  getsepisodes(i: any, name: any) {}
}
