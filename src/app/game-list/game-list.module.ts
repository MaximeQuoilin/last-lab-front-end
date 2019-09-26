import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameListRoutingModule } from './game-list-routing.module';
import { GameListContainerComponent } from './container/game-list-container/game-list-container.component';


@NgModule({
  declarations: [GameListContainerComponent],
  imports: [
    CommonModule,
    GameListRoutingModule
  ]
})
export class GameListModule { }
