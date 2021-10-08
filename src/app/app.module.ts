import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppConfig} from './Configuration/app.config';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
// import { SearchPipe} from './Filters/filter';
import { IndexComponent } from './Component/index.component';
import {MovieService} from './Service/MovieServiece';
import {MovieCollectionService} from './Service/MovieCollectionServiece';
import {LoginService} from './Service/LoginService';
import { SerialService } from './Service/SerialService';
import {SingupService} from './Service/Signup';
import { SecurityService } from './Service/SecurityService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AddmovieComponent } from './Component/admin/addmovie/addmovie.component';
// import { ManagemovieComponent } from './Component/admin/managemovie/managemovie.component';
// import { AdminindexComponent } from './Component/admin/adminindex/adminindex.component';
// import { MovieindexComponent } from './Component/movies/movieindex/movieindex.component';
// import { PlayerComponent } from './Component/movies/player/player.component';
import { LoginComponent } from './Component/login/login.component';
// import { ViewmoviesComponent } from './Component/admin/Movies/viewmovies/viewmovies.component';
// import { HindimovieComponent } from './Component/movies/hindimovie/hindimovie.component';
// import { EnglishmovieComponent } from './Component/movies/englishmovie/englishmovie.component';
// import { LatestmoviesComponent } from './Component/movies/latestmovies/latestmovies.component';
// import { CollectionComponent } from './Component/movies/collection/collection.component';
// import { MovieCollectionComponent } from './Component/admin/movie-collection/movie-collection.component';
// import { ManagecollectionComponent } from './Component/admin/managecollection/managecollection.component';
// import { AddtvComponent } from './Component/admin/addtv/addtv.component';
// import { ManagetvComponent } from './Component/admin/managetv/managetv.component';
// import { ViewtvComponent } from './Component/admin/Tv/viewtv/viewtv.component';
// import { PlyertvComponent } from './Component/movies/plyertv/plyertv.component';
// import { TvComponent } from './Component/movies/tv/tv.component';
// import { NavbarComponent } from './Component/movies/navbar/navbar.component';
// import { AdminbarComponent } from './Component/admin/adminbar/adminbar.component';
import { ResgistrationComponent } from './Component/resgistration/resgistration.component';
import { CookieService } from "ngx-cookie-service";
import { MoviesComponent } from './Component/movies/movies.component';
import { SerialComponent } from './Component/serial/serial.component';
// import { ComedyComponent } from './Component/movies/Genre/comedy/comedy.component';
// import { SciFiComponent } from './Component/movies/Genre/sci-fi/sci-fi.component';
// import { HorrorComponent } from './Component/movies/Genre/horror/horror.component';
// import { RomanceComponent } from './Component/movies/Genre/romance/romance.component';
// import { ActionComponent } from './Component/movies/Genre/action/action.component';
// import { DramaComponent } from './Component/movies/Genre/drama/drama.component';
// import { AnimationComponent } from './Component/movies/Genre/animation/animation.component';
// import { AdventureComponent } from './Component/movies/Genre/adventure/adventure.component';
// import { CrimeComponent } from './Component/movies/Genre/crime/crime.component';

export const routes: Routes = [
  // { path: 'Movies', component: MovieindexComponent ,
    // children:[ 
      // {path: 'hindimovie',  component:HindimovieComponent},
      // {path: 'englishmovie',  component: EnglishmovieComponent},
      // {path: 'latestmovie',  component: LatestmoviesComponent},
      // {path: 'collection',  component: CollectionComponent},
      // {path: 'tv', component: TvComponent},
      // {path: 'ComedyMovies', component:ComedyComponent},
      // {path: 'SciFiMovies' , component:SciFiComponent},
      // {path: 'HorrorMovies',component:HorrorComponent},
      // {path: 'RomanceMovies' , component:RomanceComponent},
      // {path: 'ActionMovies' , component:ActionComponent},
      // {path: 'DramaMovies' , component:DramaComponent},
      // {path: 'AnimationMovies' , component:AnimationComponent},
      // {path: 'AdventureMovies' , component:AdventureComponent},
      // {path: 'CrimeMovies' , component:CrimeComponent}
    // ]},
  // {path: 'Play/:id', component: PlayerComponent},
  // {path: 'Playtv/:id', component: PlyertvComponent},  
  { path: 'Login',  component: LoginComponent },
  { path: 'regis',  component: ResgistrationComponent },
  { path: '', component: IndexComponent },
  { path: 'movies', component: MoviesComponent },
    {path:'serial',component:SerialComponent},
  // { path:  'Admin', component:AdminindexComponent , 
  // children:[
  //   {path: 'addmovie',  component: AddmovieComponent},
  //   {path: 'managemovie',  component:ManagemovieComponent},
  //   {path: 'viewmovies',  component:ViewmoviesComponent},
  //   {path: 'viewtv',  component:ViewtvComponent},
  //   {path: 'addmoviepack',  component: MovieCollectionComponent },
  //   {path: 'managecollection',  component: ManagecollectionComponent },
  //   {path: 'addtv',  component: AddtvComponent },
  //   {path: 'managetv',  component: ManagetvComponent }
  // ]}
];

@NgModule({
  declarations: [
    AppComponent,
    // SearchPipe,
    IndexComponent,
    // ManagemovieComponent,
    // AddmovieComponent,
    // AdminindexComponent,
    // MovieindexComponent,
    // PlayerComponent,
    LoginComponent,
    // ViewmoviesComponent,
    // HindimovieComponent,
    // EnglishmovieComponent,
    // LatestmoviesComponent,
    // CollectionComponent,
    // MovieCollectionComponent,
    // ManagecollectionComponent,
    // AddtvComponent,
    // ManagetvComponent,
    // ViewtvComponent,
    // PlyertvComponent,
    // TvComponent,
    // NavbarComponent,
    // AdminbarComponent,
    ResgistrationComponent,
    MoviesComponent,
    SerialComponent
    // SciFiComponent,
    // HorrorComponent,
    // RomanceComponent,
    // ActionComponent,
    // DramaComponent,
    // AnimationComponent,
    // AdventureComponent,
    // CrimeComponent
  ],
  imports: [
     BrowserAnimationsModule,
    BrowserModule,
        NgbModule,
    RouterModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxSpinnerModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [
    AppConfig,
    MovieService,
    SecurityService,
    CookieService,
    LoginService,
    SingupService,
    MovieCollectionService,
    SerialService],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
