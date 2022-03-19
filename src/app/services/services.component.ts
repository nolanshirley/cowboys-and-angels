import { Component, OnInit } from '@angular/core';
import { faPerson } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  faMen = faPerson;

  constructor() { }

  ngOnInit(): void {
  }

}
