import { Component } from '@angular/core';
import { combineLatest, concat, merge, Observable, scan, Subject } from 'rxjs';
import { NotificationData, NotificationService } from './shared/notifications/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fitrack-frontend';
  isDarkMode = false;

  // notification = {
  //   id: 1,
  //   image: "",
  //   content: "+1h siłka",
  //   title: "@admal"
  // } as NotificationData;
  id = 1;

  notifications$: Observable<NotificationData[]>;

  onDelete$: Subject<number> = new Subject<number>();

  constructor(
    private readonly notificationService: NotificationService
  ) {
    const onAdd = notificationService.notifications$
      .pipe(
        scan((acc, curr) => { acc.push(curr); return acc; }, [] as NotificationData[])
      );

    // const onDeleted = this.onDelete$.pipe(
    //   scan((acc, curr) => {
    //     console.log("id", curr);
    //     console.log("acc1", acc);
    //     let not = acc.find(x => x.id == curr);
    //     console.log("not", not);
    //     let idx = acc.indexOf(not);
    //     acc.splice(idx, 1);
    //     console.log("idx", idx);
    //     console.log("acc", acc);
    //     return acc;
    //   }, [] as NotificationData[])
    // ) //zjebane to jest
    const onDeleted$ = this.onDelete$.pipe(
      scan((acc, curr) => {
        return [];
      }, [] as NotificationData[]));
    
    this.notifications$ = merge(onAdd, onDeleted$);
  }

  addTest() {
    this.notificationService.addNotification({
      id: this.id++,
      image: "",
      content: "+1h siłka",
      title: "@admal"
    } as NotificationData);
  }

  changeMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  onNotificationClosed(id: number) {
    this.onDelete$.next(id);
  }
}
