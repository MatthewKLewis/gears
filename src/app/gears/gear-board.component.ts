import { Component, OnDestroy, OnInit } from '@angular/core';
import { Gear, GearsService } from '../services/gears.service';

@Component({
  selector: 'app-gears',
  templateUrl: './gear-board.component.html',
  styleUrls: ['./gear-board.component.scss']
})
export class GearBoardComponent implements OnInit, OnDestroy {

  constructor(public gearService: GearsService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.gearService.gears = []
  }

  addGear() {
    if (this.gearService.gears.length % 2 == 0) {
      this.gearService.gears.push(new Gear(10, 'fwd'))
    } else {
      this.gearService.gears.push(new Gear(10, 'rev'))
    }
  }

  rotate() {
    this.gearService.gears.forEach((gear: Gear)=>{
      if (gear.dir == 'fwd') {
        gear.toothIndex += 1
      } else {
        gear.toothIndex -= 1
      }
    })
  }

}
