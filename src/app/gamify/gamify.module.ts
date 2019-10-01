import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamifyRoutingModule } from './gamify-routing.module';
import { GamifyContainerComponent } from './container/game-container/game-container.component';
import { ListDetailGameComponent } from './component/list-detail-game/list-detail-game.component';
import { ListUsersComponent } from './component/list-users/list-users.component';
import { GameService } from './service/game.service';
import { UserService } from './service/user.service';
import { DispatcherComponent } from './component/dispatcher/dispatcher.component';


@NgModule({
  declarations: [
    GamifyContainerComponent,
    ListDetailGameComponent,
    ListUsersComponent,
    DispatcherComponent
  ],
  imports: [
    CommonModule,
    GamifyRoutingModule
  ],
  exports: [
    ListDetailGameComponent,
    ListUsersComponent,
    DispatcherComponent
  ],
  providers: [
    GameService,
    UserService
  ]
})
export class GamifyModule { }
