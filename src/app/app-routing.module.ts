import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewVipPageModule } from './view-vip-page/view-vip-page.module';
import { ViewVipPageComponent } from './view-vip-page/view-vip-page.component';

const routes: Routes = [
  {path: 'view-vip/:id', component: ViewVipPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ViewVipPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
