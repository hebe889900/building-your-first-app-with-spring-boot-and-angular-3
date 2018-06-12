import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../service/bike.service'

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bikeService:BikeService) { }

  ngOnInit() {
  }

}
