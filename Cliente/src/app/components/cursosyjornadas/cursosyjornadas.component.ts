import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursosyjornadas',
  templateUrl: './cursosyjornadas.component.html',
  styleUrls: ['./cursosyjornadas.component.css']
})
export class CursosyjornadasComponent implements OnInit{
  componentsLoaded: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.componentsLoaded = true;
  }
}
