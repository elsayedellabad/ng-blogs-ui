import { Component, OnInit } from '@angular/core';
import { UserItem } from '../../models/user-item.model';
import { UsersService } from '../../services/users.service';
import {
  UserCardDataModel,
  emptyUserCardData,
} from 'src/app/shared/modules/cards/models/user-card-data.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  usersData: UserItem[] = [];
  listView: boolean = false;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsersData();
  }

  /**
   *  @desc. This is the getUsersData function that get's all users data from API.
   *
   */
  public getUsersData() {
    this.usersService.getUsers().subscribe({
      next: (results: UserItem[]) => {
        this.usersData = results;
      },
      error: (e) => {
        console.log(e.error['message']);
      },
    });
  }

  /**
   * @desc This is the formatCardData function that format users data
   * that will be sent to "app-user-card" component
   *
   * @param {UserItem} blogItem - to rendered in card
   * @returns {UserCardDataModel}
   */
  formatCardData(userItem: UserItem) {
    let userCardData = emptyUserCardData();
    userCardData.id = userItem?.id;
    userCardData.name = userItem?.name;
    userCardData.company = userItem?.company?.name;
    return userCardData;
  }

  /**
   * @desc This is the viewType function that
   * that will switch between list and grid views
   *
   */
  viewType(type: string) {
    if (type == 'list') {
      this.listView = false;
    } else {
      this.listView = true;
    }
  }
}
