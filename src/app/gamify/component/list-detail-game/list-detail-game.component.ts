import { Component, OnInit, Input } from '@angular/core';
import { GameBusiness } from '../../model/business/game.business';

@Component({
  selector: 'app-list-detail-game',
  templateUrl: './list-detail-game.component.html',
  styleUrls: ['./list-detail-game.component.scss']
})
export class ListDetailGameComponent implements OnInit {

  @Input() gamesListFromContainer: GameBusiness[];

  constructor() { }

  ngOnInit() {
  }

}
