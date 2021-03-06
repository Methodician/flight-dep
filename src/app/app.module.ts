import { MediaQueryService } from './shared/services/media-query.service';
import { ContactService } from './contact/contact.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2'
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CollapseDirective, CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ClickOutsideDirective } from './shared/directives/click-outside.directive';
import { AppsComponent } from './apps/apps.component';

const Routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'apps', component: AppsComponent },
  /*{
    path: 'work',
    children: [
      {
        path: '',
        component: WorkComponent
      },
      {
        path: 'apps',
        component: AppsComponent
      }
    ]
  },*/
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent }
];

export const firebaseConfig = {
  apiKey: "AIzaSyCSnWoqf9-kFI5kJcFMj2dvB_1Kxft4U6s",
  authDomain: "flight-7d05d.firebaseapp.com",
  databaseURL: "https://flight-7d05d.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "893191075960"
}

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent,
    HomeComponent,
    CollapseDirective,
    FooterComponent,
    ClickOutsideDirective,
    AppsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Routes),
    AngularFireModule.initializeApp(firebaseConfig),
    ReactiveFormsModule,
    CarouselModule,
    HttpModule
  ],
  providers: [
    ContactService,
    MediaQueryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
