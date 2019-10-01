import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamifyRoutingModule } from './gamify-routing.module';
import { GamifyContainerComponent } from './container/game-container/game-container.component';
import { ListDetailGameComponent } from './component/list-detail-game/list-detail-game.component';
import { ListUsersComponent } from './component/list-users/list-users.component';
import { GameService } from './service/game.service';
import { UserService } from './service/user.service';


@NgModule({
  declarations: [
    GamifyContainerComponent,
    ListDetailGameComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    GamifyRoutingModule
  ],
  exports: [
    ListDetailGameComponent,
    ListUsersComponent
  ],
  providers: [
    GameService,
    UserService
  ]
})
export class GamifyModule { }
