import {Component, OnInit } from '@angular/core';
import {EventService} from './event.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {Event} from './data.event';

@Component
({
  selector: 'app-event',
  templateUrl: './event.component.html',
   // inject the event service in this component.
})
export class EventComponent implements OnInit
{

  title = 'Event Detail';
  create_event= 'Create Event';
  events: Event[];
  statusCode: number;

  // Create form
   eventForm = new FormGroup({
       id: new FormControl('', Validators.required),
     name: new FormControl(),
     eventOwner: new FormControl()
   });

  // On load
  ngOnInit(): void {
    this.getEvent();
  }

  constructor (private eventService: EventService, private router: Router) {}

  // call get event service
  getEvent()
  {

     this.eventService.getAllEvent().subscribe(
                data => this.events = data,
                errorCode =>  this.statusCode = errorCode);
  }

  // call create event service
  onEventFormSubmit()
  {
    const id = this.eventForm.get('id').value.trim();
    const name = this.eventForm.get('name').value.trim();
    const owner = this.eventForm.get('eventOwner').value.trim();

    const event = new Event(id, name, owner);

    this.eventService.createEvent(event).subscribe(successCode  =>
        {
                this.statusCode = successCode;
                this.getEvent();
        },
        errorCode =>  this.statusCode = errorCode);
  }

  // call delete event service

  deleteEvent(eventId)
  {
     this.eventService.deleteEventById(eventId)
        .subscribe(successCode => {
          this.statusCode = successCode;
          this.getEvent();
       });
  }



    navigate(id, name, owner)
    {
        this.router.navigate(['eventDetail', id, name, owner]);
    }
}
