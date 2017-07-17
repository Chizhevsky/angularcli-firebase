import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AUTH_PROVIDERS } from 'angularfire2/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { ListingComponent } from './components/listing/listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { FirebaseService } from './services/firebase.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listings', component: ListingsComponent},
  {path: 'add-listing', component: AddListingComponent},
  {path: 'listing/:id', component: ListingComponent},
  {path: 'edit-listing/:id', component: EditListingComponent}
];

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBpYA9SCUUyoBQcHZnyBhLq72MLJYrzY68',
    authDomain: 'proplistings-a8062.firebaseapp.com',
    databaseURL: 'https://proplistings-a8062.firebaseio.com',
    storageBucket: 'proplistings-a8062.appspot.com',
    messagingSenderId: '334516779802'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    ListingComponent,
    EditListingComponent,
    NavbarComponent,
    AddListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FlashMessagesModule
  ],
  providers: [FirebaseService, AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
