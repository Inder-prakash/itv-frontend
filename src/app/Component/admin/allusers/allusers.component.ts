import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SingupService } from 'src/app/Service/Signup';
import { User } from 'src/app/Modal/user.model';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css'],
})
export class AllusersComponent implements OnInit {
  page: any = 1;
  userslist = [];
  total = 0;
  formdata: FormData;
  constructor(
    private spinner: NgxSpinnerService,
    private sg: SingupService,
    private rout: Router,
    public coo: CookieService,
    public router: Router
  ) {}

  ngOnInit(): void {
    if (this.coo.get('UserName') != '') {
      if (this.coo.get('Role').localeCompare('Admin')) {
        this.router.navigateByUrl('/movies');
      } else {
        this.alluser();
      }
    } else {
      this.router.navigateByUrl('/Login');
    }
  }

  alluser() {
    this.spinner.show();
    this.sg.getService(this.sg.allUsers()).then((res) => {
      if (res) {
        console.log(res);
        this.userslist = res.msg;
        this.spinner.hide();
      }
    });
  }

  deleteUser(i: any) {
    console.log(i);
    Swal.fire({
      title: 'Are You Sure',
      text: 'Delete this User',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        this.spinner.show();
        let user = new User();
        user.id = i;
        console.log(user);
        this.sg.postService(this.sg.deleteUser(), user).then((res) => {
          if (res) {
            this.alluser();
            this.spinner.hide();
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Sorry to see you go.', 'error');
      }
    });
  }

  updateStatus(i: any, status: any) {
    console.log('UPDATE STATUS');
    console.log(i);
    console.log(status);
    Swal.fire({
      title: 'Update Status',
      input: 'select',
      inputOptions: {
        true: 'True',
        false: 'False',
      },
      inputPlaceholder: status,
      showCancelButton: true,
      confirmButtonText: 'Update',
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.value) {
        this.spinner.show();
        let user = new User();
        user.id = i;
        user.status = result.value;
        console.log(user);
        this.sg.postService(this.sg.updateUser(), user).then((res) => {
          if (res) {
            this.alluser();
          }
        });
      }
    });
  }

  updateRole(i: any, role: any) {
    console.log('UPDATE ROLE');
    Swal.fire({
      title: 'Update Role',
      input: 'select',
      inputOptions: {
        Admin: 'Admin',
        User: 'User',
      },
      inputPlaceholder: role,
      showCancelButton: true,
      confirmButtonText: 'Update',
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.value) {
        this.spinner.show();
        let user = new User();
        user.id = i;
        user.role = result.value;
        this.sg.postService(this.sg.updateUser(), user).then((res) => {
          if (res) {
            this.alluser();
          }
        });
      }
    });
  }
}
