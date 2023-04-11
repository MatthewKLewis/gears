import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlotlineComponent } from './plotline/plotline.component';
import { GearBoardComponent } from './gears/gear-board.component';

const routes: Routes = [
  { path: 'plotline', component: PlotlineComponent },
  { path: 'gears', component: GearBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
