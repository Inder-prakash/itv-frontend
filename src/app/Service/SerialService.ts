import {Injectable, EventEmitter} from '@angular/core';
import{AppConfig} from '../Configuration/app.config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SerialService {
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
    
    addserial(){
        return this.appconfig.geturl()+this.appconfig.addserial;
    }
    viewtv(){
        return this.appconfig.geturl()+this.appconfig.viewtv;
    }
    updatepisodes(){
        return this.appconfig.geturl()+this.appconfig.updatepisodes;
    }
    deletetv(){
        return this.appconfig.geturl()+this.appconfig.deletetv;
    }
    updatetv(){
        return this.appconfig.geturl()+this.appconfig.updatetv;
    }
    getTvByStatus(){
        return this.appconfig.geturl()+this.appconfig.getTvByStatus;
    }
    gettv(){
        return this.appconfig.geturl()+this.appconfig.gettv;
    }
    
}
