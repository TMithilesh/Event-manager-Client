import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams , RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import {Event} from './data.event';

@Injectable()
export class EventService
{
  getAllEventUrl = 'http://localhost:8080/events';
  createEventUrl = 'http://localhost:8080/add';
  deleteEventUrl = 'http://localhost:8080/delete';

  // inject the Http
  constructor (private http: Http){}

  getAllEvent()
  {
   return this.http.get(this.getAllEventUrl)
         .map(res => res.json());

  }

  // create new event
  createEvent(event: Event)
  {
  const header = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: header });
        return this.http.post(this.createEventUrl, event, options)
               .map(success => success.status)
               .catch(this.handleError);
    }


  // delete event by id
  deleteEventById(eventId)
  {
    const header = new Headers({ 'Content-Type': 'application/json' });
    const params = new URLSearchParams();
    params.set('id', eventId);
    const options = new RequestOptions({ headers: header, params: params });
    return this.http.delete(this.deleteEventUrl + '/' + eventId)
         .map(success => success.status)
         .catch(this.handleError);
  }

  private handleError ( error: Response)
  {
    console.error(error);
    return Observable.throw(error.json);
  }

   private extractData(res: Response)
   {
     const body = res.json();
        return body;
    }
  getEvents(): String[]
  {
    return ['events1', 'event2', 'events3'];
  }
}
