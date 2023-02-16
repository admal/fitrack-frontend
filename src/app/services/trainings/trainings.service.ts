import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {
  private dummy: Training[] = [
    {
      date: dayjs().subtract(4, "day")
    },
    {
      date: dayjs().subtract(0, "day")
    }
  ];

  constructor() { }

  getTrainings(day: dayjs.Dayjs): Observable<Training[]> {
    const dummy: Training[] = [
      {
        date: dayjs().subtract(4, "day")
      },
      {
        date: dayjs().subtract(0, "day")
      }
    ];

    return of(this.dummy);
  }

  toggleTraining(day: dayjs.Dayjs): Observable<any> {
    let tr = this.dummy.find(x => x.date.isSame(day, "d"));

    if (tr) {
      this.dummy = this.dummy.filter(x => x != tr);
    } else {
      this.dummy.push({date: day});
    }

    return of({});
  }
}

export interface Training {
  date: dayjs.Dayjs;
}