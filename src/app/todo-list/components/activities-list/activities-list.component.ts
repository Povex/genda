import { ActivitiesService } from './../../services/activities.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    let dateParameter = this.route.snapshot.params['date'];
    let date = new Date();
    if(dateParameter != null) date = new Date(dateParameter);
    this.date = date.toDateString();
    this.activities.push(this.activitiesService.getActivitiesByDate(date));
  }
}
