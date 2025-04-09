import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Email} from "./email.model";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'email-laguda';
  emails:Email[]

  constructor(){
    this.emails = [
      new Email("gigio@gmail.com", "patate", "Ecco la ricetta delle patate"),
      new Email("giogio@gmail.com", "arrosto", "Ecco la ricetta dell'arrosto"),
      new Email("giagio@gmail.com", "orata", "Ecco la ricetta dell'orata")
    ]
  }

  aggiungiMail(email: HTMLInputElement, oggetto: HTMLInputElement, testo: HTMLInputElement){
    this.emails.push(new Email(email.value, oggetto.value, testo.value))
    console.log("elemento aggiunto")
    email.value = ""
    oggetto.value = ""
    testo.value = ""
  }
}
