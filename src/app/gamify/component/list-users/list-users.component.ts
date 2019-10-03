import { Component, OnInit, Input } from '@angular/core';
import { UserBusiness } from '../../model/business/user.business';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  @Input() usersListFromContainer: UserBusiness[];

  constructor() { }

  ngOnInit() {
  }

}
