import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _notifications$ = new Subject<NotificationData>();
  public notifications$: Observable<NotificationData>;

  constructor() { 
    this.notifications$ = this._notifications$;
  }

  addNotification(notification: NotificationData) {
    this._notifications$.next(notification);
  }
}

export interface NotificationData {
  id: number;
  title?: string;
  content?: string;
  image?: string;
}
