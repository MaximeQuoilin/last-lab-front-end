import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListContainerComponent } from './container/game-list-container/game-list-container.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: GameListContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameListRoutingModule { }
