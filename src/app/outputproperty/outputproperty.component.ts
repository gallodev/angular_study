import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-outputproperty',
  templateUrl: './outputproperty.component.html',
  styleUrls: ['./outputproperty.component.scss']
})
export class OutputpropertyComponent implements OnInit {

  @Input("valor") valor:number;

  incrementa(){
    this.valor++;
  }

  decrementa(){
    this.valor--;
  }

  constructor() { }

  ngOnInit() {
  }

}
