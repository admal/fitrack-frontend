import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotificationData } from '../notification.service';

@Component({
  selector: 'ft-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  @Input() notification: NotificationData;
  @Output() onClose = new EventEmitter<NotificationData>();

  close() {
    this.onClose.emit(this.notification);
  }
}
