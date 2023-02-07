import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faWeightScale, faWeightHanging, faCookie } from '@fortawesome/free-solid-svg-icons';
import { map, Observable } from 'rxjs';
import { ModalService } from 'src/app/shared/ui/modal/modal.service';

@Component({
  selector: 'ft-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  faWeightScale = faWeightScale;
  faWeightHanging = faWeightHanging;
  faCookie = faCookie;

  exampleForm: FormGroup;
  tmp$: Observable<any>;

  editStageModalId = "testModal";

  constructor(
    private readonly fb: FormBuilder,
    private readonly modalService: ModalService,) {
    this.exampleForm = fb.group({
      weight: fb.control(83, [Validators.required])
    });

    this.tmp$ = this.exampleForm.valueChanges.pipe(map(x => x));
  }

  todo() {
    this.modalService.open(this.editStageModalId);
  }

  save() {
    console.log("Save");
    this.modalService.close(this.editStageModalId);
  }

  cancel() {
    console.log("Cancel");
    this.modalService.close(this.editStageModalId);
  }
}
