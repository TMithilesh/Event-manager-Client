import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {EventComponent} from '../event.component';

@Component({
  selector: 'app-table-render',
  inputs: ['events'],
  template: `
    <table cellpadding="5" cellspacing="5">
    <tr><th> Id  </th> <th>Name  </th><th>Event Owner  </th><th></th><th></th></tr>
    <tr *ngFor="let event of events" >
  
          <td>{{event.id}}</td> <td>{{event.name}}</td> <td>{{event.eventOwner}}</td>
        <td> <button (click)="navigate(event.id,event.name,event.eventOwner)"> Event Detail </button></td>
      <td><button type="button" (click)="deleteEvent(event.id)">Delete</button></td>
   </tr>
  </table> 
`
})
export class TableRenderComponent implements OnInit {

  constructor(private router: Router, private eventComponent: EventComponent) { }

  ngOnInit() 
  {
  }

   navigate(id, name, owner)
    {
        this.router.navigate(['eventDetail', id, name, owner]);
    }
  
  deleteEvent(id)
  {
    this.eventComponent.deleteEvent(id);
  }

}
