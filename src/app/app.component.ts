import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'binding';

  subtitle = 'I am a interpolation output';

  user = {uid : 100,
    fname :'Data binding'
  };
propbnd ='I am a output for property binding';
colorval ='green';

 clsname = 'bgc';
hrefval = 'https://www.rencata.com/';
 updatedlink = 'https://angular.io/guide/routing-overview';
}
