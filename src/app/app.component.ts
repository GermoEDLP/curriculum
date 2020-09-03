import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv';

  constructor(){

  }

  scroll(id: string){
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    if(window.screen.width<895){
      this.toogleMenu()
    }    
  }

  toogleMenu(){
    $('#navbarSupportedContent').toggle('slow');
  }






}
