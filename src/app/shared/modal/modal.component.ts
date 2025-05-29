import { Component, signal } from '@angular/core';
import { ModalService } from '../serives/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  isModal = signal(false)
  constructor(public toggle:ModalService){
    
  }

  isOpenModal(){
    this.toggle.setModal(true)
  }

  isCloseModal() {
    this.toggle.setModal(false)
  }


}
