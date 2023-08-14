import { Component, OnInit, Host } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { SerialService } from '../../../Service/SerialService';
import { SecurityService } from 'src/app/Service/SecurityService';
import { CookieService } from 'ngx-cookie-service';
import { Form } from 'src/app/Modal/Form';
import { Movie } from 'src/app/Modal/movie.model';

@Component({
  selector: 'app-play-tv',
  templateUrl: './play-tv.component.html',
  styleUrls: ['./play-tv.component.css'],
})
export class PlayTvComponent implements OnInit {
  google = 'false';
  public vidLink: any;
  public download: any;
  public name: any;
  public language: any;
  public genere: any;
  public size: any;
  public image: any;
  public id: any;
  public episodes: any = [];
  public movie = [];
  public trailer: any;
  public player = 'none';
  public pages = 'none';
  public vid = this.sanitization.bypassSecurityTrustResourceUrl('');
  constructor(
    public coo: CookieService,
    public sec: SecurityService,
    private ss: SerialService,
    private sanitization: DomSanitizer,
    private spinnerService: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public path = "url('assets/images/bg1.jpg')";
  public img = this.sanitization.bypassSecurityTrustStyle(this.path);

  ngOnInit(): void {
    if (this.coo.get('UserName') != '') {
      this.route.queryParams.subscribe((params) => {
        this.id = params.id;
        this.getTv(this.id);
      });
    } else {
      this.router.navigateByUrl('/Login');
    }
  }

  getTv(id: any) {
    this.spinnerService.show();
    let m = new Movie();
    m.id = id;
    this.ss.postService(this.ss.gettv(), m).then((result) => {
      if (result) {
        // elink: [];
        // ename: [];
        // episodes: 0;

        console.log(result);
        this.name = result.msg.name;
        this.image = result.msg.image;
        for (var i = 0; i < result.msg.episodes; i++) {
          var data = {
            link: result.msg.elink[i],
            name: result.msg.ename[i],
          };
          this.episodes.push(data);
        }
        console.log(this.episodes);
        // this.playmovie(result.msg.link);
        this.spinnerService.hide();
        this.trailer =
          'https://www.bing.com/videos/search?q=' + result.msg.name;
        this.trailer = this.sanitization.bypassSecurityTrustResourceUrl(
          this.trailer
        );
      }
    });
  }

  externalurl(url: any) {
    window.location.href = url;
  }

  down() {
    window.location.href = this.download;
  }

  playmovie(url: any) {
    console.log(url);
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
      window.location.href = url;
    }
  }
}
