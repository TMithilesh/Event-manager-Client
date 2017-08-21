import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  id;
  name;
  evnetOwner;
  constructor(private route: ActivatedRoute) { }

  ngOnInit()
  {
    this.route.params.subscribe (params =>
      {
      this.id = params['id'];
      this.name = params['name'];
      this.evnetOwner = params['owner'];
    });
  }
}
