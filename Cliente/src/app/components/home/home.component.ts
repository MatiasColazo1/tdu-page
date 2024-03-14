import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  componentsLoaded: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.componentsLoaded = true;
  }
}