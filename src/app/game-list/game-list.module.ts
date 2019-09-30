import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameListRoutingModule } from './game-list-routing.module';
import { GameListContainerComponent } from './container/game-list-container/game-list-container.component';
import { ListDetailGameComponent } from './component/list-detail-game/list-detail-game.component';


@NgModule({
  declarations: [GameListContainerComponent, ListDetailGameComponent],
  imports: [
    CommonModule,
    GameListRoutingModule
  ],
  exports: [ListDetailGameComponent]
})
export class GameListModule { }
