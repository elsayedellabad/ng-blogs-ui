import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardDataModel, emptyCardData } from './../../models/card-data.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input() cardItem: CardDataModel = emptyCardData();

  constructor(public dialog: MatDialog) {}

}
