import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CardsDetailsComponent } from './components/cards-details/cards-details.component';
import { CardsComponent } from './components/cards/cards.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [CardsComponent, CardsDetailsComponent, UserCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [CardsComponent, CardsDetailsComponent, UserCardComponent],
})
export class CardsModule {}
