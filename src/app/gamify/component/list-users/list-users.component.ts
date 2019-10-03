import { Component, OnInit, Input, Output } from '@angular/core';
import { UserBusiness } from '../../model/business/user.business';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  @Input() usersListFromContainer: UserBusiness[];
  @Output() deleteUserFromList: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public deleteUser(userId: number) {
    this.deleteUserFromList.emit(userId);
  }
}
