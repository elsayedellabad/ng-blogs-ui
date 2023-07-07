import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  statisticsCardsData = [
    {
      total: 345,
      title: 'Total Orders',
      icon: 'shopping_cart',
    },
    {
      total: 267,
      title: 'Total Expenses',
      icon: 'account_balance_wallet',
    },
    {
      total: 345,
      title: 'Total Revenue',
      icon: 'bar_chart',
    },
    {
      total: 345,
      title: 'New Users',
      icon: 'person',
    },

  ];
}
