import { ActivitiesService } from './../services/activities.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


@Injectable()
export class ActivityRouterActivator implements CanActivate{

    constructor(
        private activitiesService: ActivitiesService,
        private router: Router
    ){}

    canActivate(route: ActivatedRouteSnapshot){
        let dateParam = route.params['date'];
        let date = new Date(dateParam);
        try {
            date.toISOString();
        } catch (error) {
            this.router.navigate(['todo-list/activities']);
            return false;
        }
        return true;
    }
    
}
