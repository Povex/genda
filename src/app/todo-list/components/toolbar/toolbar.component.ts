import { Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { ActivitiesService } from '../../services/activities.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public searchField?: string;
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(public dialog: MatDialog,
     public activitiesService: ActivitiesService,
     public authenticationService: AuthenticationService
     ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddActivityDialog, {
      width: '250px',
      data: {title: "", description: ""},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.activitiesService.addActivity(result);
    });
  }
}

export interface DialogData {
  title: string;
  description: string;
}

@Component({
  selector: 'add-activity-dialog',
  templateUrl: 'add-activity-dialog.html',
  styles: ['.slider {display:flex; flex-direction:column}']
})
export class AddActivityDialog {
  sliderValue = 1;

  constructor(
    public dialogRef: MatDialogRef<AddActivityDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
