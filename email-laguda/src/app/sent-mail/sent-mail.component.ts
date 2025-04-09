import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Email} from "./email.model";
@Component({
  selector: 'app-sent-mail',
  imports: [],
  templateUrl: './sent-mail.component.html',
  styleUrl: './sent-mail.component.css'
})
export class SentMailComponent {
  @Input() mail:Email

  constructor(){
    this.mail = new Email("", "", "")
  }

}
