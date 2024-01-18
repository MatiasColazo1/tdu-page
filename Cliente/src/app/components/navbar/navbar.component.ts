import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  isScrolled = false;

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true); // third parameter
  }

  @HostListener('window:scroll', ['$event'])
  scroll(event: any): void {
    this.isScrolled = window.scrollY > 100; // Ajusta 100 a la distancia de scroll que prefieras
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scroll, true);
  }

  toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
  }
}