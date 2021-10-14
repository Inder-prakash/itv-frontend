import { Injectable } from "@angular/core";

@Injectable()
export class AppConfig {
  geturl() {
     let base = "http://localhost:8080/";
    // let base = "https://watchmore.herokuapp.com/";
    return base;
  }

  public AddMovie ="AddMovie";
  public getmovie = "getmovie";
  public ViewMovies = "ViewMovies";
  public MovieByStatus = "MovieByStatus";
  public MovieByCategories = "MovieByCategories";
  public MovieByLanguage = "MovieByLanguage";
  public UpdateMovie = "UpdateMovie";
  public deleteselected = "deleteselected";
  public search = "search";

  public newcollection = "newcollection";
  public viewmoveiepack = "viewmoveiepack";
  public getmoviesByMoviePack = "getmoviesByMoviePack";
  public updatemoviepackname = "updatemoviepackname";
  public deletepack = "deletepack";
  public newsequals="newsequals";
  public getsequals="getsequals";
  public udatesequal = "udatesequal";
  
  public login ="login";
  public signup = "signup";


 
  
  public addserial = "addserial";
  public viewtv = "viewtv";
  public gettv = "gettv";
  public getTvByStatus = "getTvByStatus";
  public updatepisodes = "updatepisodes";
  public updatetv = "updatetv";
  public deletetv = "deletetv";
  
  //   public userauthorization = "userauthorization";
  // public adminauthorization = "adminauthorization";
  // public AddMovie ="AddMovie";
  // public ViewMovies ="ViewMovies";
  // public PublicMovies = "PublicMovies";
  // public PrivateMovies = "PrivateMovies";
  // public hindiMovies = "hindiMovies";
  // public englishMovies = "englishMovies";
  // public ComedyMovies = "ComedyMovies";
  // public SciFiMovies = "SciFiMovies";
  // public HorrorMovies ="HorrorMovies";
  // public RomanceMovies = "RomanceMovies";
  // public ActionMovies = "ActionMovies";
  // public DramaMovies = "DramaMovies";
  // public AnimationMovies = "AnimationMovies";
  // public AdventureMovies = "AdventureMovies";
  // public CrimeMovies = "CrimeMovies";
  // public DeleteMovie ="DeleteMovie";
  // public login ="login";
  // public signup = "signup";
  // public UpdateMovie="UpdateMovie";
  // public getmovie = "getmovie";
  // public addtv = "addtv";
  // public Viewtv ="Viewtv";
  // public Publictv = "Publictv";
  // public Privatetv = "Privatetv";
  // public Deletetv ="Deletetv";
  // public gettv = "gettv";
  // public Updatetv="Updatetv";
  // public deleteselected="deleteselected";
  // public newcollection= "newcollection";
  // public viewmoveiepack="viewmoveiepack";
  // public managemoveiepack="managemoveiepack";
  // public getmovies="getmovies";
  // public newsequals="newsequals";
  // public updatemoviepackname="updatemoviepackname";
  // public deletepack="deletepack";
  // public getsequals="getsequals";
  // public udatesequal="udatesequal";
  // public addserial="addserial";
  // public viewtv="viewtv";
  // public getsepisodes="getsepisodes";
  // public updatepisodes="updatepisodes";
  // public deletetv = "deletetv";
  // public updatetv="updatetv";
  // public publictv = "publictv";
  // public userauthorization = "userauthorization";
  // public adminauthorization = "adminauthorization";
}
