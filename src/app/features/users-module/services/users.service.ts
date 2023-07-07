import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USERS_API } from 'src/app/core';
import { UserItem } from '../models/user-item.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
   /**
   * @desc This is the getUsers service function that
   * call API for getting all users data.
   *
   */
  getUsers(): Observable<UserItem[]> {
      let apiUrl = USERS_API;      
      return this.http.get<UserItem[]>(apiUrl);
  }
}
