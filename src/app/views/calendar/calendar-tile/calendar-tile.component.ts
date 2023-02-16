import { Component, Input } from '@angular/core';

@Component({
  selector: 'ft-calendar-tile',
  templateUrl: './calendar-tile.component.html',
  styleUrls: ['./calendar-tile.component.scss']
})
export class CalendarTileComponent {
  @Input() state?: TileState;

  get tileBg(): string[] {
    switch (this.state) {
      case TileState.disabled:
        return ["bg-gray-300"];
      case TileState.noTraining:
        return ["bg-red", "cursor-pointer"];
      case TileState.yesTraining:
        return ["bg-green", "font-medium", "border", "border-black", "cursor-pointer"];
      case TileState.today:
        return ["bg-white", "cursor-pointer"];
      default:
        return [""];
    }
  }
}

export enum TileState {
  today,
  noTraining,
  yesTraining,
  disabled
}
