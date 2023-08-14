import { Component, OnInit, Host } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieService } from '../../../Service/MovieServiece';
import { SecurityService } from 'src/app/Service/SecurityService';
import { CookieService } from 'ngx-cookie-service';
import { Form } from 'src/app/Modal/Form';
import { Movie } from 'src/app/Modal/movie.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  constructor(
    public coo: CookieService,
    public sec: SecurityService,
    private ms: MovieService,
    private sanitization: DomSanitizer,
    private spinnerService: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  google = 'false';
  public vidLink: any;
  public download: any;
  public name: any;
  public language: any;
  public genere: any;
  public size: any;
  public image: any;
  public id: any;
  public movie = [];
  public trailer: any;

  ngOnInit(): void {
    if (this.coo.get('UserName') != '') {
      this.route.queryParams.subscribe((params) => {
        this.id = params.id;
        this.getmovie(this.id);
      });
    } else {
      this.router.navigateByUrl('/Login');
    }
  }

  getmovie(id: any) {
    this.spinnerService.show();
    let m = new Movie();
    m.id = id;
    this.ms.postService(this.ms.getmoive(), m).then((result) => {
      if (result) {
        console.log(result);
        this.name = result.msg.name;
        this.language = result.msg.language;
        this.genere = result.msg.genere;
        this.size = result.msg.size;
        this.image = result.msg.image;
        this.playmovie(result.msg.link);
        console.log(this.movie);
        this.spinnerService.hide();
        this.trailer =
          'https://www.bing.com/videos/search?q=' + result.msg.name;
        this.trailer = this.sanitization.bypassSecurityTrustResourceUrl(
          this.trailer
        );
      }
    });
  }

  down() {
    window.location.href = this.download;
  }

  playmovie(url: any) {
    if (url.includes('https://drive.google.com/')) {
      this.google = 'true';
      if (url.includes('open?id=')) {
        var res = url.replace('open?id=', 'file/d/');
        var res2 = url.replace('open?', 'u/0/uc?');
        this.download = res2 + '&export=download';
        url = res + '/preview';
        this.vidLink = this.sanitization.bypassSecurityTrustResourceUrl(url);
      } else {
        if (url.includes('view?usp=sharing')) {
          var res = url.replace('view?usp=sharing', 'preview');
          url = res;
          this.vidLink = this.sanitization.bypassSecurityTrustResourceUrl(url);

          var res2 = url.replace('file/d/', 'u/3/uc?id=');
          res2 = url.replace('/view?usp=sharing', '&export=download');
          this.download = res2;
        }
      }
    } else {
      this.google = 'false';
      this.download = url;
    }
  }
}
