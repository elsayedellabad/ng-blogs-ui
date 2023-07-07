import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BLOGS_API } from 'src/app/core';
import { BlogItem } from '../models/blog-item.model';

@Injectable({
  providedIn: 'root',
})

export class BlogsService {
  constructor(private http: HttpClient) {}
  /**
   * @desc This is the getBlogs service function that
   * call API for getting all blogs data.
   *
   */
  getBlogs(): Observable<BlogItem[]> {
    let apiUrl = BLOGS_API;
    return this.http.get<BlogItem[]>(apiUrl);
  }
}
