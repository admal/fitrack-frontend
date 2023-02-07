import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'ft-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  isShown = false;

  @Input() id: string = "";
  @Output() onClosed = new EventEmitter<void>();  

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    if (!this.id) {
      throw new Error("Modal must have id assigned!");
    }

    this.modalService.registerModal(this);
  }

  ngOnDestroy(): void {
    this.modalService.unregisterModal(this.id);
  }

  open() {
    this.isShown = true;
  }

  close() {
    this.isShown = false;
    this.onClosed.emit();
  }
}
