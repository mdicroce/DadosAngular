import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dados';
  numero1: number =  Math.ceil(Math.random()*6);
  numero2: number =  Math.ceil(Math.random()*6);

  dadoIzquierda = `../assets/img/dice${this.numero1}.png`
  dadoDerecha = `../assets/img/dice${this.numero2}.png`


  tirarDados():void{
    this.numero1 = Math.ceil(Math.random()*6);
    this.numero2 =  Math.ceil(Math.random()*6);
    this.dadoIzquierda = `../assets/img/dice${this.numero1}.png`
    this.dadoDerecha = `../assets/img/dice${this.numero2}.png`
  }
}
