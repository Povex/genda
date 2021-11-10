import { EventEmitter, Inject, Injectable } from "@angular/core";



@Injectable()
export class ActivitiesService{
    date = new Date();
    activitiesChangeEvent = new EventEmitter();

    getActivities(){
        return activities;
    }

    getActivitiesByDate(date: Date){
        this.date = date;
        return activities.filter(activity => activity.date.toDateString() === date.toDateString());
    }

    addActivity(activity: any){
        let a = {title: activity.title,
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


const activities = [
    {
    title: "Spesa",
    priority: 1,
    description: "Latte, uova.",
    date: new Date('2021-11-08'),
    compleated: false,
    },
    {
      title: "Preparare esame di AML",
      priority: 5,
      description: "Pomeriggio ripasso le slide e le domande",
      date: new Date('2021-11-09'),
      compleated: false,
    },
    {
        title: "Finire progetto todolist e corso angular",
        priority: 5,
        description: "dd",
        date: new Date('2021-11-09'),
        compleated: false,
      },
      {
        title: "//fix",
        priority: 5,
        description: "hold state on session and not on service",
        date: new Date('2021-11-10'),
        compleated: false,
      },
      {
        title: "//fix",
        priority: 5,
        description: "attach to DB",
        date: new Date('2021-11-10'),
        compleated: false,
      },
];