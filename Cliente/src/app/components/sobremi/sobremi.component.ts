import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  componentsLoaded: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.componentsLoaded = true;
  }
}
