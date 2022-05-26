import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  display: boolean = false;

  mobile = false;

  constructor() { }

  ngOnInit() {
    if (window.screen.width === 360) { // 768px portrait
      this.mobile = true;
    }
    window.onresize = () => this.mobile = window.innerWidth <= 640;
  }

  handleClick(e: void) {
    this.display = !this.display;
  }

}
