import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AuthenticationService]
})
export class AuthComponent {
  modalRef: BsModalRef;

  constructor(public authService: AuthenticationService, private modalService: BsModalService) { }

  

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeFirstModal() {
    this.modalRef.hide();
    this.modalRef = null;
  }
}
