import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeListComponent } from './componentes/time-list/time-list.component';
import { TimeFormComponent } from './componentes/time-form/time-form.component';
import { SalaVipComponent } from './componentes/sala-vip/sala-vip.component';
import { SalaInternacionalComponent } from './componentes/sala-internacional/sala-internacional.component';

const routes: Routes = [
  { path: 'times', component: TimeListComponent },
  { path: 'addtimes', component: TimeFormComponent },
  { path: 'salavip', component: SalaVipComponent },
  { path: 'salainternacional', component: SalaInternacionalComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
