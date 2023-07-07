import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { BlogsService } from '../../services/blogs.service';
import { BlogItem } from '../../models/blog-item.model';
import { emptyCardData } from 'src/app/shared';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  blogsData: BlogItem[] = [];

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.getAllBlogs();
  }

  /**
   *  @desc. This is the getAllBlogs function that get's all blogs to Blogs page.
   *
   */
  public getAllBlogs() {
    this.blogsService.getBlogs().subscribe({
      next: (result: BlogItem[]) => {
        this.blogsData = result;
      },
      error: (e: any) => {
        console.log(e.error['message']);
      },
    });
  }

  /**
   * @desc This is the formatCardData function that format blogs data
   * that will be sent to "app-cards" component
   *
   * @param {BlogItem} blogItem - to rendered in card
   * @returns {CardDataModel}
   */
  formatCardData(blogItem: BlogItem) {
    let cardData = emptyCardData();
    cardData.title = blogItem?.title;
    cardData.description = blogItem?.body;
    cardData.id = blogItem?.id;
    return cardData;
  }
}
