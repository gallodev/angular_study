import { Component } from '@angular/core';
import { CursosService } from './cursos/cursos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cursos : string[];
  
  constructor(private cursosService:CursosService){
   this.cursos =  this.cursosService.getCursos();
  }


  title = 'Teste2';
  
}
