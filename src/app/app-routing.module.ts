import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/gamify' , pathMatch: 'full'},
  {path: 'gamify', loadChildren: () => import('./gamify/gamify.module').then(m => m.GamifyModule)},
  {path: '**', redirectTo: '/gamify'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
