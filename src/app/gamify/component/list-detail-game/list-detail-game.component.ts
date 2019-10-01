import { Component, OnInit, Input } from '@angular/core';
import { GameInterface } from '../../model/game.interface';

@Component({
  selector: 'app-list-detail-game',
  templateUrl: './list-detail-game.component.html',
  styleUrls: ['./list-detail-game.component.scss']
})
export class ListDetailGameComponent implements OnInit {

  @Input() gamesList: GameInterface[];

  constructor() { }

  ngOnInit() {
  }

}
