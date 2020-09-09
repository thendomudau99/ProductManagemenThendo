import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html' ,
  styles : [`

  body
  {
  
  background-image: url("assets/images/back.jpg");
  background-size: cover;
	background-position: top center;
	position: relative;
	z-index: 1;
    
  
  }
  .tt
  {
    background-color : gray;
    font-family : bold;
    color : black;
  }
  a
  {
    color : white;
  }

  .y
  {
    color : white ;
  }

  .b
  {
    background-color : red ;
  }
  
  
  
  `]
})
export class AppComponent {
  title = 'Vhadau Sports Wear';
}
