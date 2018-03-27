import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-outputproperty',
  templateUrl: './outputproperty.component.html',
  styleUrls: ['./outputproperty.component.scss']
})
export class OutputpropertyComponent implements OnInit {

  @Input("valor") valor:number;
  @Output() mudaValor = new EventEmitter();

  incrementa(){
    this.valor++;
    this.mudaValor.emit({novoValor:this.valor});
  }

  decrementa(){
    this.valor--;
    this.mudaValor.emit({novoValor:this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
