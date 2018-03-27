import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url : string = "www.google.com.br";
  urlImage = 'http://lorempixel.com/400/200/sports/';
  mouseOver : boolean = false;
  valorInicial = 15;

  @ViewChild('nome') nome : HTMLElement; 

  onMudaValor(evento){
    console.log(evento.novoValor);
  }

  getValor(){
    return 1;
  }

  botaoClicado(){
    alert("Clicado")
  }

  onKeyUp(event){
    console.log(event.target.value);
  }

  onMouseOut(){
    this.mouseOver = !this.mouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
