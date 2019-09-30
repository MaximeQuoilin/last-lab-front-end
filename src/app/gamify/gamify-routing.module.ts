import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamifyContainerComponent } from './container/game-container/game-container.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: GamifyContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamifyRoutingModule { }
