import { FlexboxComponent } from './flexbox/flexbox.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemobuttonsComponent } from './demobuttons/demobuttons.component';

const routes: Routes = [
  {path: 'buttons', component: DemobuttonsComponent },
  {path: 'flexbox', component: FlexboxComponent},
  {path: '**', redirectTo: 'flexbox'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
