import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SentMailComponent } from './sent-mail/sent-mail.component';
import { Sentemail } from './sent-mail/sent-email.mode';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SentMailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mail-laguda';
  mails:Sentemail[];   // <-- component property
  constructor(){
    this.mails = [
      new Sentemail('gig@gmail.com', 'patate', "bablòalaba"),
      new Sentemail('gianng@gmail.com', 'arrosto', "ayayayaay"),
      new Sentemail('gio@gmail.com', 'anh', "nagaga")
    ];
  }
}
