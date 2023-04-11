import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlotlineComponent } from './plotline/plotline.component';
import { GearBoardComponent } from './gear-board/gear-board.component';

const routes: Routes = [
  { path: '', component: PlotlineComponent },
  { path: 'gearboard', component: GearBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
