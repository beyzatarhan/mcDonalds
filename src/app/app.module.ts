import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { LezzetlerComponent } from './lezzetler/lezzetler.component';
import { SirComponent } from './sir/sir.component';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { KampanyalarComponent } from './kampanyalar/kampanyalar.component';

@NgModule({
  declarations: [								
    AppComponent,
      NavComponent,
      FooterComponent,
      AnasayfaComponent,
      LezzetlerComponent,
      SirComponent,
      HakkimizdaComponent,
      KampanyalarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
