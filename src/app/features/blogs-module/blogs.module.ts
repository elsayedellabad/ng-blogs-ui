import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsContainerComponent } from './components/blogs-container/blogs-container.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogsRoutingModule } from './blogs-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { CardsModule } from 'src/app/shared/modules/cards/cards.module';
import { SpinnerComponent } from 'src/app/shared';

@NgModule({
  declarations: [
    BlogsContainerComponent,
    BlogsComponent,
    // SpinnerComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    CardsModule,
  ],
})
export class BlogsModule {}
