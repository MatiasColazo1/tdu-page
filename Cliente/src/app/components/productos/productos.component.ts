import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  selectedTab: string = '1';
  menuOpen: boolean = false;
  componentsLoaded: boolean = false;

  constructor() {

  }
  
  ngOnInit(): void {
      this.componentsLoaded = true;
  }


  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
