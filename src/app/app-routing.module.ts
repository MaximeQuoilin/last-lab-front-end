import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamifyModule } from './gamify/gamify.module';


const routes: Routes = [
  {path: '', loadChildren: () => import('./gamify/gamify.module').then(m => m.GamifyModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
