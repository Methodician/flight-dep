import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2'
import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCSnWoqf9-kFI5kJcFMj2dvB_1Kxft4U6s",
  authDomain: "flight-7d05d.firebaseapp.com",
  databaseURL: "https://flight-7d05d.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "893191075960"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
