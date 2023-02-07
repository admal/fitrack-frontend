import { Injectable } from '@angular/core';
import { ModalComponent } from './modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private _modals: ModalComponent[];

  constructor() {
    this._modals = [];
  }

  registerModal(modal: ModalComponent) {
    this._modals.push(modal);
  }

  unregisterModal(id: string) {
    this._modals = this._modals.filter(x => x.id !== id);
  }

  open(id: string) {
    const modal = this._modals.find(x => x.id === id);

    if (modal) {
      modal.open();
    } else {
      throw Error(`Can't find modal with id: ${id}`);
    }
  }

  close(id: string) {
    const modal = this._modals.find(x => x.id === id);
    
    if (modal) {
      modal.close();
    } else {
      throw Error(`Can't find modal with id: ${id}`);
    }
  }
}
