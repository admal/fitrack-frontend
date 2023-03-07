import { Injectable } from '@angular/core';
import { HubConnection } from '@microsoft/signalr';
import { HubConnectionBuilder } from '@microsoft/signalr/dist/esm/HubConnectionBuilder';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HappyCoachNotificationService {
  private hubConnection: HubConnection | null = null;

  public notifications$ = new Subject<HappyCoachNotification>();
  constructor() {

  }

  startConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:7148/happy-coach/hub")
      .build();

    this.hubConnection
      .start()
      .then(() => console.log("Connection started"))
      .catch(err => console.error('Error while starting connection: ' + err));

    this.hubConnection.on("newHappyCoachNotification", (data: HappyCoachNotification) => {
      console.log("on newHappyCoachNotification", data);
      this.notifications$.next(data);
    });
  }

  send(notification: HappyCoachNotification): Promise<void> {
    if (this.hubConnection == undefined) {
      throw new Error("HubConnection undefined");
    }

    return this.hubConnection.invoke("NewNotification", notification);
  }

  stopConnection() {
    this.hubConnection?.stop()
      .then(() => console.log("Connection stopped"))
      .catch(err => console.error('Error while stopping connection: ' + err));
  }
}

export interface HappyCoachNotification {
  // notificationType: HappyCoachNotificationType;
  userName: string;
  // progress: number;
  // currentProgress: number;
  // oldProgress: number;
}

export enum HappyCoachNotificationType {
  Time,
  Distance
}