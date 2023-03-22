import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'ft-validation-group',
  templateUrl: './validation-group.component.html',
  styleUrls: ['./validation-group.component.scss']
})
export class ValidationGroupComponent {
  @Input() public control: AbstractControl;
}
