import { IActivity } from './../model/activity.model';
import { EventEmitter, Inject, Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";



@Injectable()
export class ActivitiesService{
    date = new Date();
    activitiesChangeEvent = new EventEmitter();

    getActivities(){
        let subject = new Subject();
        setTimeout(() => {
          subject.next(activities);
          subject.complete();
        }, 100);
        return subject;
    }

    getActivitiesByDate(date: Date): Observable<IActivity[]>{
        this.date = date;
        let subject = new Subject<IActivity[]>();
        setTimeout(() => {
          let x = activities.filter(activity => activity.date.toDateString() === date.toDateString());
          subject.next(x);
          subject.complete();
        }, 1000);
        return subject;
    }

    addActivity(activity: IActivity){
        let a = {
                id: -1,
                title: activity.title,
                priority: 3,
                description: activity.description,
                date: this.date,
                compleated: false
              }
        console.log(a);
        activities.push(a);
        this.activitiesChangeEvent.emit();
    }
}


const activities: IActivity[] = [
    {
    id: 1,
    title: "Spesa",
    priority: 1,
    description: "Latte, uova.",
    date: new Date('2021-11-08'),
    compleated: false,
    },
    {
      id: 2,
      title: "Preparare esame di AML",
      priority: 5,
      description: "Pomeriggio ripasso le slide e le domande",
      date: new Date('2021-11-09'),
      compleated: false,
    },
    {
      id: 3,
        title: "Finire progetto todolist e corso angular",
        priority: 5,
        description: "dd",
        date: new Date('2021-11-09'),
        compleated: false,
      },
      {
        id: 4,
        title: "//fix",
        priority: 5,
        description: "hold state on session and not on service",
        date: new Date('2021-11-10'),
        compleated: false,
      },
      {
        id: 5,
        title: "//fix",
        priority: 5,
        description: "attach to DB",
        date: new Date('2021-11-10'),
        compleated: false,
      },
];