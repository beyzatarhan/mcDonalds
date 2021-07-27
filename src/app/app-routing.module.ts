import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { FooterComponent } from './footer/footer.component';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { KampanyalarComponent } from './kampanyalar/kampanyalar.component';
import { LezzetlerComponent } from './lezzetler/lezzetler.component';
import { SirComponent } from './sir/sir.component';

const routes: Routes = [
  {path:"", redirectTo:"/anasayfa", pathMatch:"full"},
  {path:"anasayfa", component:AnasayfaComponent},
  {path:"footer", component:FooterComponent},
  {path:"lezzetler", component:LezzetlerComponent},
  {path:"kampanyalar",component:KampanyalarComponent},
  {path:"hakkimizda",component:HakkimizdaComponent},
  {path:"sir",component:SirComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
