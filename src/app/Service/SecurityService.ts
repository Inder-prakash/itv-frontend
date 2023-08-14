import {Injectable, EventEmitter} from '@angular/core';
import{AppConfig} from '../Configuration/app.config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SecurityService {
        constructor(private http: HttpClient , public appconfig:AppConfig) {
    
        }

    getService(url: string): Promise<any> {
        return this.http
            .get(url)
            .toPromise()
            .catch(this.handleError);
    }
    postService(url: string, bodyParam: any): Promise<any> {
        return this.http
            .post(url,bodyParam)
            .toPromise()
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
    
    // userauthorization(){
    //     return this.appconfig.geturl()+this.appconfig.userauthorization;
    // }
    
    // adminauthorization(){
    //     return this.appconfig.geturl()+this.appconfig.adminauthorization;
    // }
}
