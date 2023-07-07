import { Component, Input, OnInit } from '@angular/core';
import { CardDataModel, emptyCardData } from './../../models/card-data.model';
import { UserCardDataModel, emptyUserCardData } from '../../models/user-card-data.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() userCardItem: UserCardDataModel = emptyUserCardData();

  constructor() {}

}
