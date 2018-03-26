import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    CursosComponent
  ],
  declarations: [
    CursosComponent
  ]
})
export class CursosModule { }
