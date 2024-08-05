import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeFormComponent } from './componentes/time-form/time-form.component';
import { TimeListComponent } from './componentes/time-list/time-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SalaVipComponent } from './componentes/sala-vip/sala-vip.component';
import { SalaInternacionalComponent } from './componentes/sala-internacional/sala-internacional.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeFormComponent,
    TimeListComponent,
    HeaderComponent,
    FooterComponent,
    SalaVipComponent,
    SalaInternacionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
