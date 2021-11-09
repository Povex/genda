import { Inject, Injectable } from "@angular/core";


@Injectable()
export class ActivitiesService{

    getActivities(){
        return activities;
    }

    getActivitiesByDate(date: Date){
        return activities.find(activity => activity.date.toDateString() == date.toDateString());
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
    },];