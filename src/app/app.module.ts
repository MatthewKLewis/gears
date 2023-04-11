import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlotlineComponent } from './plotline/plotline.component';
import { GearBoardComponent } from './gear-board/gear-board.component';
import { GearComponent } from './gear-board/gear/gear.component';

@NgModule({
  declarations: [
    AppComponent,
    PlotlineComponent,
    GearBoardComponent,
    GearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
