import { Component, Input, OnInit } from '@angular/core';
import { Gear } from 'src/app/services/gears.service';

@Component({
  selector: 'Gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.scss']
})
export class GearComponent implements OnInit {
  @Input() gearInput!: Gear;
  constructor() { }
  ngOnInit(): void { }
}
