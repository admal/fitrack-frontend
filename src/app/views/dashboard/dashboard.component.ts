import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faWeightScale, faWeightHanging, faCookie } from '@fortawesome/free-solid-svg-icons';
import { map, Observable, tap } from 'rxjs';
import { HappyCoachNotification, HappyCoachNotificationService, HappyCoachNotificationType } from 'src/app/services/notifications/happy-coach-notification.service';
import { ModalService } from 'src/app/shared/ui/modal/modal.service';

@Component({
  selector: 'ft-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  faWeightScale = faWeightScale;
  faWeightHanging = faWeightHanging;
  faCookie = faCookie;

  exampleForm: FormGroup;
  tmp$: Observable<any>;
  notifications$: Observable<HappyCoachNotification>;
  editStageModalId = "testModal";

  constructor(
    private readonly fb: FormBuilder,
    private readonly modalService: ModalService,
    private readonly notificationService: HappyCoachNotificationService) {
    this.exampleForm = fb.group({
      weight: fb.control(83, [Validators.required])
    });

    this.tmp$ = this.exampleForm.valueChanges.pipe(map(x => x));

    this.notifications$ = notificationService.notifications$.pipe(tap(x => console.log("Received", x)));
  }

  ngOnInit(): void {
    this.notificationService.startConnection();
  }

  todo() {
    this.modalService.open(this.editStageModalId);
  }

  save() {
    console.log("Save");
    this.notificationService
      .send({
        // notificationType: HappyCoachNotificationType.Distance,
        // progress: 1, currentProgress: 10, oldProgress: 9, 
        userName: "Test"
      })
      .then(() => this.modalService.close(this.editStageModalId));
  }

  cancel() {
    console.log("Cancel");
    this.modalService.close(this.editStageModalId);
  }

  ngOnDestroy(): void {
    this.notificationService.stopConnection();
  }
}
