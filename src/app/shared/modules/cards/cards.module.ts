import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CardsComponent } from './components/cards/cards.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [CardsComponent,  UserCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [CardsComponent, UserCardComponent],
})
export class CardsModule {}
