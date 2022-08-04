import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  scroll(id: string) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    if (window.screen.width < 895) {
      this.toogleMenu();
    }
  }

  toogleMenu() {
    $('#navbarSupportedContent').toggle('slow');
  }
}
