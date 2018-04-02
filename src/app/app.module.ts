import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { CursosService } from './cursos/cursos.service';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { OutputpropertyComponent } from './outputproperty/outputproperty.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataBidingComponent,
    OutputpropertyComponent,
    DiretivaNgifComponent,
    HighlightMouseDirective    
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
