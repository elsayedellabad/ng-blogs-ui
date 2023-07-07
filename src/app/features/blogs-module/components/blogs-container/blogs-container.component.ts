import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs-container',
  templateUrl: './blogs-container.component.html',
  styleUrls: ['./blogs-container.component.scss'],
})
export class BlogsContainerComponent {
  constructor(private router: Router) {}
}
