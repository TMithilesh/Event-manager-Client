import { Component , OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  template: 
  `
  {{cookieValue}}
  <router-outlet></router-outlet>
  `,
  providers: [CookieService]
})
export class AppComponent implements OnInit
{	
	cookieValue = 'UNKNOWN';
	constructor (private cookieService: CookieService){}
	
	ngOnInit(): void 
	{
		this.cookieService.set( 'eventManager', 'DXL- Manager' );
    	this.cookieValue = this.cookieService.get('eventManager');
	}
	
}