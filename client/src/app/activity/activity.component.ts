import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activity: { id: number, name: string}

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.activity = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    this.route.params
    .subscribe(
      (params: Params) => {
        this.activity.id = params['id'];
        this.activity.name = params['name']
      }
    );

  };



}
