import {Injectable, EventEmitter} from '@angular/core';
import{AppConfig} from '../Configuration/app.config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {
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

    
    AddMovie(){
        return this.appconfig.geturl()+this.appconfig.AddMovie;
    }

    ViewMovies(){
        return this.appconfig.geturl()+this.appconfig.ViewMovies;
    }

    UpdateMovie(){
        return this.appconfig.geturl()+this.appconfig.UpdateMovie;
    }

    getmoive(){
        return this.appconfig.geturl() + this.appconfig.getmovie;
    }

    MovieByStatus(){
        return this.appconfig.geturl() + this.appconfig.MovieByStatus;
    }

    MovieByCategories(){
        return this.appconfig.geturl() + this.appconfig.MovieByCategories;
    }

    MovieByLanguage(){
        return this.appconfig.geturl() + this.appconfig.MovieByLanguage;
    }

    deleteselected() {
        return this.appconfig.geturl() + this.appconfig.deleteselected;
    }

    search() {
         return this.appconfig.geturl() + this.appconfig.search;
    }
    //     DeleteMovie(){
    //     return this.appconfig.geturl()+this.appconfig.DeleteMovie;
    // }

    //    hindiMovies(){
    //     return this.appconfig.geturl()+this.appconfig.hindiMovies;
    // }

    // englishMovies() {
    //     return this.appconfig.geturl()+this.appconfig.englishMovies;
    // }
   
    // ComedyMovies() {
    //     return this.appconfig.geturl()+this.appconfig.ComedyMovies;
    // }
    // SciFiMovies() {
    //     return this.appconfig.geturl()+this.appconfig.SciFiMovies;
    // }
    // HorrorMovies() {
    //     return this.appconfig.geturl()+this.appconfig.HorrorMovies;
    // }
    // RomanceMovies() {
    //     return this.appconfig.geturl()+this.appconfig.RomanceMovies;
    // }
    // ActionMovies() {
    //     return this.appconfig.geturl()+this.appconfig.ActionMovies;
    // }
    // DramaMovies() {
    //     return this.appconfig.geturl()+this.appconfig.DramaMovies;
    // }
    // AnimationMovies() {
    //     return this.appconfig.geturl()+this.appconfig.AnimationMovies;
    // }
    // AdventureMovies() {
    //     return this.appconfig.geturl()+this.appconfig.AdventureMovies;
    // }
    // CrimeMovies() {
    //     return this.appconfig.geturl()+this.appconfig.CrimeMovies;
    // }

    // PublicMovies(){
    //     return this.appconfig.geturl()+this.appconfig.PublicMovies;
    // }

    // PrivateMovies() {
    //     return this.appconfig.geturl()+this.appconfig.PrivateMovies;
    // }
}
