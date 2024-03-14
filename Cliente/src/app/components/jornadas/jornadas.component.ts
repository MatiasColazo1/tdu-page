import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jornadas',
  templateUrl: './jornadas.component.html',
  styleUrls: ['./jornadas.component.css']
})
export class JornadasComponent implements OnInit {
  componentsLoaded: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.componentsLoaded = true;
  }
}
