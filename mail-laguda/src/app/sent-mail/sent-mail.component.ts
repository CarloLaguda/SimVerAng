import { Component, HostBinding, Input, OnInit} from '@angular/core';
import { Sentemail } from './sent-email.model';
@Component({
  selector: 'app-sent-mail',
  imports: [],
  templateUrl: './sent-mail.component.html',
  styleUrl: './../app.component.css'
})
export class SentMailComponent implements OnInit {
  @Input() email:Sentemail;
  @HostBinding('attr.class') cssClass = 'bg-bianco';
  button_clicked = true
  constructor(){
    this.email = new Sentemail("", "", "")
  }
  
  toggleSpecial() {
    if(this.cssClass == "bg-bianco"){
      this.cssClass = "bg-giallo"
      console.log("ciaso1")
    }else{
      this.cssClass = "bg-bianco"
      console.log("ciaso2")
    }
    return false;
  }
  
  clicked_button(){
    this.email.clicked_button()
    return false;
  }
  ngOnInit(){}
}
