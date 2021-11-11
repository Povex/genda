import { ActivitiesService } from './../../services/activities.service';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss']
})
export class ActivitiesListComponent implements OnInit {
  activities?: any = [];
  date: any;

  constructor(
    private activitiesService: ActivitiesService,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    ) { }

  ngOnInit(): void {
    let dateParameter = this.route.snapshot.params['date'];
    let date = new Date();
    if(dateParameter != null) date = new Date(dateParameter);
    this.date = date;
    //this.activities.push.apply(this.activities, this.activitiesService.getActivitiesByDate(date));
    this.activitiesService.getActivitiesByDate(date).subscribe(
      (activities) => {
        console.log("Attività: ", activities);
        this.activities.push.apply(this.activities, activities);
      }
    );

    this.activitiesService.activitiesChangeEvent.subscribe(
      () => { this.activities = [];
        this.ngOnInit();}
    );
  }
}


