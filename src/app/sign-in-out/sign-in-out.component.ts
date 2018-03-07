import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-sign-in-out',
  templateUrl: './sign-in-out.component.html',
  styleUrls: ['./sign-in-out.component.css'],
  providers: [AuthenticationService]
})
export class SignInOutComponent implements OnInit {

  user;
  private isLoggedIn: Boolean;
  private userName: String;
  private uid: string;
  modalRef: BsModalRef;
  constructor(public authService: AuthenticationService, private modalService: BsModalService) {
    this.authService.user.subscribe(user =>  {
      if (user == null) {
        this.isLoggedIn = false;
        console.log(this.isLoggedIn)
      } else {
        this.isLoggedIn = true;
        console.log(this.isLoggedIn)
        this.userName = user.displayName;
        this.uid = user.uid;
        console.log(this.uid);
      }
    });
  }
  // createUser(name: string, email: string, password: string, link: string, language: string) {
  //   var newUser: User = new User(email, password);
  // } -- Work In Progress 03/06/2018
  // login() {
  //   this.authService.login();
  // }

  logout() {
    this.authService.logout();
  }
  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
    closeFirstModal() {
    this.modalRef.hide();
    this.modalRef = null;
  }
}
