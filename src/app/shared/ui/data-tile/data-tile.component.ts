import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'ft-data-tile',
  templateUrl: './data-tile.component.html',
  styleUrls: ['./data-tile.component.scss']
})
export class DataTileComponent {
  @Input() 
  data: string = "";

  @Input()
  icon: IconDefinition | null = null;

  // @Input()
  // color: string = "";
}
