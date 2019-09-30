import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListModule } from './game-list/game-list.module';


const routes: Routes = [
  {path: '', loadChildren: () => import('./game-list/game-list.module').then(m => m.GameListModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
