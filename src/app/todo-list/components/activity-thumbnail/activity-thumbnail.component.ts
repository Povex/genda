import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-activity-thumbnail',
  templateUrl: './activity-thumbnail.component.html',
  styleUrls: ['./activity-thumbnail.component.scss']
})
export class ActivityThumbnailComponent implements OnInit {

  panelOpenState = false;
  @Input() public activity: any;
  @Output() checkBoxStateEvent = new EventEmitter<void>();
  checked = false;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  panelOpen():void {
    this.panelOpenState = true;
  }

  panelClose():void{
    this.panelOpenState = false;
  }

  setChecked(checked: any){
    this.checked = checked;
    this.checkBoxStateEvent.emit();
    this._snackBar.open(`${this.activity.title} COMPLETATA`, 'ok');
  }

  public logFoo(){
    console.log("Foo");
  }
}
