import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-blogs-ui';
  
  routes = [
    {
      label: 'Home',
      path: 'home',
    },
    {
      path: 'users/list',
      label: 'Users',
    },
    {
      path: 'blogs/list',
      label: 'Blogs',
    },
  ];
}
