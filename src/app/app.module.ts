import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlotlineComponent } from './plotline/plotline.component';
import { GearBoardComponent } from './gears/gear-board.component';
import { GearComponent } from './gears/gear/gear.component';

@NgModule({
  declarations: [
    AppComponent,
    PlotlineComponent,
    GearBoardComponent,
    GearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
