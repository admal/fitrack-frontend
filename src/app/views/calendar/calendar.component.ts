import { Component, OnInit } from '@angular/core';
import { TileState } from './calendar-tile/calendar-tile.component';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import * as dayjs from 'dayjs'
import { map, Observable, startWith, Subject, switchMap } from 'rxjs';
import { Training, TrainingsService } from 'src/app/services/trainings/trainings.service';

@Component({
  selector: 'ft-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  tileState = TileState;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  today = dayjs();
  shownToday = this.today;

  changeMonth$ = new Subject<dayjs.Dayjs>();
  days$: Observable<DayData[]>;

  constructor(
    private readonly trainingsService: TrainingsService
  ) {
    this.days$ = this.changeMonth$.pipe(
      startWith(this.today),
      map(x => this.getDays(x)),
      switchMap(x => this.addTrainings(x))
    );
  }

  ngOnInit(): void {
  }

  get jsDate() {
    return this.shownToday.toDate();
  }

  private getDays(today: dayjs.Dayjs): DayData[] {
    let firstDayOfMonth = today.startOf("month");

    let dayOfWeek = firstDayOfMonth.day() - 1; //-1 because in dayjs week start on Sunday
    if (dayOfWeek < 0) {
      dayOfWeek = 6;
    }
    let days: DayData[] = [];
    for (let i = 0; i < dayOfWeek; i++) {
      days.push({});
    }

    for (let index = 0; index < today.daysInMonth(); index++) {
      let day = firstDayOfMonth.add(index, "day");
      let dayData = {
        date: day,
        day: day.date(),
        today: day.isSame(today, "d"),
        state: this.getState(day)
      };

      days.push(dayData);
    }

    return days;
  }

  nextMonth() {
    this.shownToday = this.shownToday.add(1, "month");
    this.changeMonth$.next(this.shownToday);
  }

  previousMonth() {
    this.shownToday = this.shownToday.subtract(1, "month");
    this.changeMonth$.next(this.shownToday);
  }

  toggleTraining(day: DayData) {
    if (day.date == undefined) {
      return;
    }
    
    if(day.state != undefined && day.state == TileState.disabled) {
      return;
    }

    this.trainingsService.toggleTraining(day.date).subscribe(x => this.changeMonth$.next(this.shownToday));//turbo temp!!!!
  }

  private getState(day: dayjs.Dayjs): TileState {
    if (day.isSame(this.today, "d")) {
      return TileState.today;
    }

    if (day.isAfter(this.today)) {
      return TileState.disabled;
    }

    return TileState.noTraining;
  }

  private addTrainings(days: DayData[]): Observable<DayData[]> {
    let anyDay = days[days.length - 1];

    return this.trainingsService.getTrainings(anyDay.date!)
      .pipe(
        map(trainings => {
          for (const training of trainings) {
            let trainingDay = days.find(x => x.date != undefined && training.date.isSame(x.date, "d"));
            
            if (trainingDay != undefined) {
              trainingDay.state = TileState.yesTraining;
            }
          }

          return days;
        })
      )
  }
}

interface DayData {
  date?: dayjs.Dayjs;
  day?: number;
  today?: boolean;
  state?: TileState;
}