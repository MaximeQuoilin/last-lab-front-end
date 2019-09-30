import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamifyRoutingModule } from './gamify-routing.module';
import { GamifyContainerComponent } from './container/game-container/game-container.component';
import { ListDetailGameComponent } from './component/list-detail-game/list-detail-game.component';


@NgModule({
  declarations: [GamifyContainerComponent, ListDetailGameComponent],
  imports: [
    CommonModule,
    GamifyRoutingModule
  ],
  exports: [ListDetailGameComponent]
})
export class GamifyModule { }
