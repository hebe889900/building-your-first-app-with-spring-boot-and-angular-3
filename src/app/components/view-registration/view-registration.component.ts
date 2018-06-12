import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../service/bike.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  template: `
    <p>
      view-registration works!
    </p>
  `,
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
  public bikeReg;
  constructor(private bikeService: BikeService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.getBikeReg(this.route.snapshot.params.id);
  }

  getBikeReg(id:number) {
    this.bikeService.getBike(id).subscribe(
      data => {
        this.bikeReg = data;
      },
      err => console.error(err),
      () => console.log('bike loaded')
    )
  }
}
