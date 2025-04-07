import { Component, Input } from '@angular/core';
import { Sentemail } from './sent-email.model';
@Component({
  selector: 'app-sent-mail',
  imports: [],
  templateUrl: './sent-mail.component.html',
  styleUrl: './sent-mail.component.css'
})
export class SentMailComponent {
  @Input() email:Sentemail;

  constructor(){
    this.email = new Sentemail("", "", "")
  }

}
