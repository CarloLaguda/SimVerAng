import { Component, Input, OnInit,ElementRef, Renderer2} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sentemail } from './sent-email.model';
@Component({
  selector: 'app-sent-mail',
  imports: [CommonModule ],
  templateUrl: './sent-mail.component.html',
  styleUrl: './sent-mail.component.css'
})
export class SentMailComponent implements OnInit {
  @Input() email:Sentemail;
  backgroundColor = 'transparent';
  button_clicked = true
  constructor(private el: ElementRef, private renderer: Renderer2){
    this.email = new Sentemail("", "", "")
  }

  toggleSpecial() {
    if (this.backgroundColor === 'transparent') {
      this.backgroundColor = 'yellow'; // Cambia il colore a giallo
    } else {
      this.backgroundColor = 'transparent'; // Torna al colore trasparente
    }
  }
  
  clicked_button(){
    this.email.clicked_button()
    return false;
  }
  ngOnInit(){}
}
