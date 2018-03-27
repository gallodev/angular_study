import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { CursosService } from './cursos/cursos.service';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { OutputpropertyComponent } from './outputproperty/outputproperty.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBidingComponent,
    OutputpropertyComponent    
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
