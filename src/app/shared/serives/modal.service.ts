import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

 private  modal = signal(false)

  setModal(val:any){
    return this.modal.set(val)
  }

  getModal() {
    return this.modal();
  }


}
