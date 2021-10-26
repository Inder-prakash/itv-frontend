import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppConfig } from './Configuration/app.config';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
// import { SearchPipe} from './Filters/filter';
import { IndexComponent } from './Component/index.component';
import { MovieService } from './Service/MovieServiece';
import { MovieCollectionService } from './Service/MovieCollectionServiece';
import { LoginService } from './Service/LoginService';
import { SerialService } from './Service/SerialService';
import { SingupService } from './Service/Signup';
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
import { CookieService } from 'ngx-cookie-service';
import { MoviesComponent } from './Component/movies/movies.component';
import { MoviebyStatusComponent } from './Component/movies/movieby-status/movieby-status.component';
import { EnglishMoviesComponent } from './Component/movies/english-movies/english-movies.component';
import { HindiMoviesComponent } from './Component/movies/hindi-movies/hindi-movies.component';
import { ActionMoviesComponent } from './Component/movies/action-movies/action-movies.component';
import { AdventureMoviesComponent } from './Component/movies/adventure-movies/adventure-movies.component';
import { AnimationMoviesComponent } from './Component/movies/animation-movies/animation-movies.component';
import { ComedyMoviesComponent } from './Component/movies/comedy-movies/comedy-movies.component';
import { CrimeMoviesComponent } from './Component/movies/crime-movies/crime-movies.component';
import { DramaMoviesComponent } from './Component/movies/drama-movies/drama-movies.component';
import { HorrorMoviesComponent } from './Component/movies/horror-movies/horror-movies.component';
import { RomanceMoviesComponent } from './Component/movies/romance-movies/romance-movies.component';
import { ScifiMoviesComponent } from './Component/movies/scifi-movies/scifi-movies.component';
import { SerchResultComponent } from './Component/movies/serch-result/serch-result.component';
import { PlayerComponent } from './Component/movies/player/player.component';
import { SerialComponent } from './Component/movies/serial/serial.component';
import { AdminNavbarComponent } from './Component/admin/admin-navbar.component';
import { AddmovieComponent } from './Component/admin/addmovie/addmovie.component';
import { AddmoviepackComponent } from './Component/admin/addmoviepack/addmoviepack.component';
import { AddtvComponent } from './Component/admin/addtv/addtv.component';
import { ManagetvComponent } from './Component/admin/managetv/managetv.component';
import { ManagemoviepackComponent } from './Component/admin/managemoviepack/managemoviepack.component';
import { ManagemovieComponent } from './Component/admin/managemovie/managemovie.component';
import { ViewmovieComponent } from './Component/admin/viewmovie/viewmovie.component';
import { ViewtvComponent } from './Component/admin/viewtv/viewtv.component';
import { AllusersComponent } from './Component/admin/allusers/allusers.component';
import { SearchComponent } from './Component/admin/search/search.component';
import { MoviepackComponent } from './Component/movies/moviepack/moviepack.component';
import { MatIconModule } from '@angular/material/icon';
import { PlayTvComponent } from './Component/movies/play-tv/play-tv.component';
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
  {
    path: 'movies',
    component: MoviesComponent,
    children: [
      { path: 'search', component: SerchResultComponent },
      { path: 'pulbicmovies', component: MoviebyStatusComponent },
      { path: 'hindimovie', component: HindiMoviesComponent },
      { path: 'englishhmovie', component: EnglishMoviesComponent },
      // {path: 'latestmovie',  component: LatestmoviesComponent},
      { path: 'moviepack', component: MoviepackComponent },
      // {path: 'tv', component: TvComponent},
      { path: 'ComedyMovies', component: ComedyMoviesComponent },
      { path: 'SciFiMovies', component: ScifiMoviesComponent },
      { path: 'HorrorMovies', component: HorrorMoviesComponent },
      { path: 'RomanceMovies', component: RomanceMoviesComponent },
      { path: 'ActionMovies', component: ActionMoviesComponent },
      { path: 'DramaMovies', component: DramaMoviesComponent },
      { path: 'AnimationMovies', component: AnimationMoviesComponent },
      { path: 'AdventureMovies', component: AdventureMoviesComponent },
      { path: 'CrimeMovies', component: CrimeMoviesComponent },
      { path: 'serial', component: SerialComponent },
    ],
  },
  // {path: 'Play/:id', component: PlayerComponent},
  // {path: 'Playtv/:id', component: PlyertvComponent},
  { path: 'Login', component: LoginComponent },
  { path: 'regis', component: ResgistrationComponent },
  { path: 'index', component: IndexComponent },
  { path: 'Play', component: PlayerComponent },
  { path: 'PlayTv', component: PlayTvComponent },
  { path: '', component: IndexComponent },
  {
    path: 'Admin',
    component: AdminNavbarComponent,
    children: [
      { path: 'addmovie', component: AddmovieComponent },
      { path: 'managemovie', component: ManagemovieComponent },
      { path: 'viewmovies', component: ViewmovieComponent },
      { path: 'viewtv', component: ViewtvComponent },
      { path: 'addmoviepack', component: AddmoviepackComponent },
      { path: 'managecollection', component: ManagemoviepackComponent },
      { path: 'addtv', component: AddtvComponent },
      { path: 'managetv', component: ManagetvComponent },
      { path: 'allusers', component: AllusersComponent },
      { path: 'search', component: SearchComponent },
    ],
  },
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
    MoviebyStatusComponent,
    EnglishMoviesComponent,
    HindiMoviesComponent,
    ActionMoviesComponent,
    AdventureMoviesComponent,
    AnimationMoviesComponent,
    ComedyMoviesComponent,
    CrimeMoviesComponent,
    DramaMoviesComponent,
    HorrorMoviesComponent,
    RomanceMoviesComponent,
    ScifiMoviesComponent,
    SerchResultComponent,
    PlayerComponent,
    SerialComponent,
    AdminNavbarComponent,
    AddmovieComponent,
    AddmoviepackComponent,
    AddtvComponent,
    ManagetvComponent,
    ManagemoviepackComponent,
    ManagemovieComponent,
    ViewmovieComponent,
    ViewtvComponent,
    SearchComponent,
    MoviepackComponent,
    AllusersComponent,
    PlayTvComponent,
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
    MatIconModule,
    [RouterModule.forRoot(routes)],
  ],
  providers: [
    AppConfig,
    MovieService,
    SecurityService,
    CookieService,
    LoginService,
    SingupService,
    MovieCollectionService,
    SerialService,
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule, MatIconModule],
})
export class AppModule {}
