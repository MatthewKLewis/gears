import { Injectable } from '@angular/core';

export class Gear {
  toothIndex: number = 0;
  teeth: number = 0;
  color: string = '';
  dir: string = ''

  constructor(teeth: number, dir: string) {
    this.teeth = teeth;
    this.toothIndex = 0;
    this.dir = dir;

    switch (Math.floor(Math.random() * 9)) {
      case 1:
        this.color = 'red'
        break;
      case 2:
        this.color = 'blue'
        break;
      case 3:
        this.color = 'green'
        break;
      case 4:
        this.color = 'purple'
        break;        
      case 5:
        this.color = 'black'
        break;
      case 6:
        this.color = 'yellow'
        break;
      case 7:
        this.color = 'indigo'
        break;
      case 8:
        this.color = 'purple'
        break;        
      default:
        this.color = 'orange'
        break;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class GearsService {

  gears: Gear[] = []

  constructor() { }

}
