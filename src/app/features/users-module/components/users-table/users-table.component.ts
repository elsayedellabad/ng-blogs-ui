import {
  AfterViewInit,
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ChangeDetectorRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationEnd, Router } from '@angular/router';
import { UserItem } from './../../models/user-item.model';
@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    if (this.dataSource) {
      this.dataSource.sort = sort;
    }
  }
  @Input() usersTableData!: UserItem[];
  usersTableDisplayedColumns: string[] = ['Name', 'Designation', 'JoiningDate'];

  displayedColumns: string[] = this.usersTableDisplayedColumns;
  dataSource = new MatTableDataSource();
  loading = true;
  length: number = 0;
  pageIndex: number = 1;
  pageSize: number = 5;
  previousPageIndex: number | undefined = 0;

  pages = [];
  usersTableError = false;
  usersTableErrorMessage =
    'Error in retrieving Users Data. Please try again later';
  filterUsers = '';
  noDataMessage = `There are no users yet!.`;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.usersTableData) {
      this.length = this.usersTableData.length;
      this.processUsersTableData();
    }
  }

  /**
   * @desc This is the processUsersTableData function that
   * that will prepare users data and paginate it.
   *
   */
  processUsersTableData() {
    this.loading = false;
    if (this.usersTableData?.length > 0) {
      this.getUsersDataPaginated({
        length: this.usersTableData?.length,
        pageIndex: 0,
        pageSize: 5,
        previousPageIndex: this.previousPageIndex,
      });
    }
  }

  /**
   * Fix pagination while navigating
   */
  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
    this.cdr.detectChanges();
  }

  /**
   * Apply search filter for values on Users DataGrid
   */
  applySearchFilter() {
    let filteredData = this.usersTableData;
    this.dataSource.data = this.usersTableData;

    if (this.filterUsers.trim() !== '') {
      const filterValue = this.filterUsers.trim().toLowerCase();
      filteredData = filteredData.filter((item) =>
        item?.name?.toLowerCase().includes(filterValue)
      );
    }
    this.dataSource.data = filteredData;
    if (this.filterUsers.trim() == '') {
      this.processUsersTableData();
    }
  }

  /**
   * Apply Pagination
   */
  public getUsersDataPaginated(event: PageEvent) {
    if (event.pageIndex == 0)
      this.dataSource.data = this.usersTableData.slice(0, event.pageSize);
    else
      this.dataSource.data = this.usersTableData.slice(
        event.pageIndex * event.pageSize,
        (event.pageIndex + 1) * event.pageSize
      );
    this.pageIndex = event?.pageIndex;
    this.pageSize = event?.pageSize;
    this.previousPageIndex = event?.previousPageIndex;

    return event;
  }

  /**
   * Reset Data
   */
  resetData() {
    this.loading = true;
    this.usersTableError = false;
  }
}
