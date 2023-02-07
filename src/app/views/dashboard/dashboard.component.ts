import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faWeightScale, faWeightHanging, faCookie } from '@fortawesome/free-solid-svg-icons';
import { map, Observable } from 'rxjs';

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

  constructor(private readonly fb: FormBuilder) {
    this.exampleForm = fb.group({
      weight: fb.control(83, [Validators.required])
    });

    this.tmp$ = this.exampleForm.valueChanges.pipe(map(x => x));
  }

  todo() {
    console.log("TODO");
  }
}
