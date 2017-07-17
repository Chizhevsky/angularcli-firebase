import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>;
  constructor(
    public af: AngularFireAuth,
    public flashMessage: FlashMessagesService
  ) {
    this.user = af.authState;
  }

  ngOnInit() {
  }

  login() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.af.auth.signOut();
    this.flashMessage.show('You are logged out', {cssClass: 'alert-success', timeout: 3000});
  }

}
