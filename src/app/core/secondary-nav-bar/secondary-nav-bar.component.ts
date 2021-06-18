import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-nav-bar',
  templateUrl: './secondary-nav-bar.component.html',
  styleUrls: ['./secondary-nav-bar.component.scss'],
})
export class SecondaryNavBarComponent implements OnInit {
  constructor() {}

  isFixedNavbar = true;
  @HostBinding('class.navbar-opened') navbarOpened = false;

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }

  ngOnInit(): void {}
}
