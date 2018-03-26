import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url : string = "www.google.com.br";
  urlImage = 'http://lorempixel.com/400/200/sports/';
  mouseOver : boolean = false;

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
