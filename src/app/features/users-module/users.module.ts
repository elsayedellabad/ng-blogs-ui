import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import { UsersRoutingModule } from './users-routing.module';
import { UsersContainerComponent } from './components/users-container/users-container.component';
import { UsersComponent } from './components/users/users.component';
import { CardsModule } from 'src/app/shared';
import { UsersTableComponent } from './components/users-table/users-table.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
@NgModule({
  declarations: [
    UsersComponent,
    UsersContainerComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    CardsModule,
    MatTableModule,
    FormsModule,
    MatSortModule
  ]
})
export class UsersModule { }
