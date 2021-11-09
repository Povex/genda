import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobuttons',
  template: `
    <button mat-button color="primary">Primary</button>
  `,
  styles: [
  ]
})
export class DemobuttonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
