export class Sentemail{
    email: string;
    oggetto: string;
    testo: string;
    btn_clk: boolean;
    txt_bottone: string;
    constructor(email: string, oggetto: string, testo: string){
        this.email = email
        this.oggetto = oggetto
        this.testo = testo
        this.btn_clk = true
        this.txt_bottone= "Chiudi"
    }

    clicked_button(): void{
        this.btn_clk = !this.btn_clk
        this.txt_bottone = this.btn_clk ? "Chiudi": "Espandi"
    }
}