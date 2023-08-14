import { Injectable, EventEmitter } from '@angular/core';
import { AppConfig } from '../Configuration/app.config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieCollectionService {
  constructor(private http: HttpClient, public appconfig: AppConfig) {}

  getService(url: string): Promise<any> {
    return this.http.get(url).toPromise().catch(this.handleError);
  }
  postService(url: string, bodyParam: any): Promise<any> {
    return this.http.post(url, bodyParam).toPromise().catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  newcollection() {
    return this.appconfig.geturl() + this.appconfig.newcollection;
  }
  viewmoveiepack() {
    return this.appconfig.geturl() + this.appconfig.viewmoveiepack;
  }
  getmoviesByMoviePack() {
    return this.appconfig.geturl() + this.appconfig.getmoviesByMoviePack;
  }

  updatemoviepackname() {
    return this.appconfig.geturl() + this.appconfig.updatemoviepackname;
  }
  deletepack() {
    return this.appconfig.geturl() + this.appconfig.deletepack;
  }
  newsequals() {
    return this.appconfig.geturl() + this.appconfig.newsequals;
  }
  getsequals() {
    return this.appconfig.geturl() + this.appconfig.getsequals;
  }
  udatesequal() {
    return this.appconfig.geturl() + this.appconfig.udatesequal;
  }
}
