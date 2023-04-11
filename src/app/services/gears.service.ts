import { Injectable } from '@angular/core';

export class Gear {
  toothIndex: number = 0;
  teeth: number = 0;
  color: string = '';
  dir: string = ''

  constructor(teeth: number, dir: string) {
    this.teeth = teeth;
    this.toothIndex = 0;
    this.color = 'lightblue';
    this.dir = dir;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GearsService {

  gears: Gear[] = []

  constructor() { }

}
