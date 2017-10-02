import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: String = 'http://google.com.br';
  cursoAngular = true;
  urlImagem: String = 'http://lorempixel.com/400/200/nature/';
  valorAtual: String = '';
  valorSalvo: String = '';
  isMouseOver = false;

  getValor() {
    return 1;
  }

  botaoClicado() {
    console.log(this.valorAtual);
  }

  onKeyUp(evento: KeyboardEvent) {
    const verifyString: String = (<HTMLInputElement>evento.target).value;

    this.valorAtual = '';
    this.valorSalvo = '';
    if (verifyString.length >= 3) {
      this.valorAtual = (<HTMLInputElement>evento.target).value;
    }
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  getCurtiCurso() {
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
