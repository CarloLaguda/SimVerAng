import { Component, HostBinding, Input } from '@angular/core';
import { Sentemail } from './sent-email.model';
@Component({
  selector: 'app-sent-mail',
  imports: [],
  templateUrl: './sent-mail.component.html',
  styleUrl: './sent-mail.component.css'
})
export class SentMailComponent {
  @Input() email:Sentemail;
  //@HostBinding('attr.class') cssClass = 'bg-info-subtle';
  button_clicked = true
  constructor(){
    this.email = new Sentemail("", "", "")
  }
  /*
  isSpecialClicked: boolean = false
  @HostBinding('class.bg-info') get isBlueBackground() {
    return this.isSpecialClicked;
  }
  toggleSpecial() {
    this.isSpecialClicked = !this.isSpecialClicked;
    console.log(this.isSpecialClicked)
  }
  */
  clicked_button(){
    this.email.clicked_button()
    return false;
  }

}
