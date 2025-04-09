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
  @Input() singola_mail:Email
  buttone_clk: boolean = true;
  txt_bottone: string = "chiudi"

  constructor(){
    this.singola_mail = new Email("", "", "")
  }

  chiudi_espandi(){
    this.buttone_clk = !this.buttone_clk 
    this.txt_bottone = this.buttone_clk ? "Espandi" : "Chiudi"
    return false
  }
}
