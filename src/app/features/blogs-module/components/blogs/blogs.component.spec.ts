import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BlogsComponent } from './blogs.component';
import { PageEvent } from '@angular/material/paginator';
import { BlogsService } from '../../services/blogs.service';
import { of } from 'rxjs';
// import * as mockBlogsData from 'src/app/core/mocks/mocked-blogs.json';
import { BlogItem } from '../../models/blog-item.model';
import { MatCardModule } from '@angular/material/card';

describe('BlogsComponent', () => {
  let component: BlogsComponent;
  let fixture: ComponentFixture<BlogsComponent>;
  let blogsServiceSpy: any;

  beforeEach(async () => {
    blogsServiceSpy = jasmine.createSpyObj(['getBlogs']);
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, MatCardModule],
      declarations: [BlogsComponent],
      providers: [{ providers: BlogsService, useValue: blogsServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogsComponent);
    component = fixture.componentInstance;
    blogsServiceSpy = TestBed.inject(BlogsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test getAllBlogs()', () => {
    const serviceSpy = spyOn(blogsServiceSpy, 'getBlogs');
    serviceSpy.and.returnValue(of(
      [{
        "userId": 10,
        "id": 95,
        "title": "id minus libero illum nam ad officiis",
        "body": "earum voluptatem facere provident blanditiis velit laboriosam\npariatur accusamus odio saepe\ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt"
      },
      {
        "userId": 10,
        "id": 96,
        "title": "quaerat velit veniam amet cupiditate aut numquam ut sequi",
        "body": "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
      }]
    ));
    component.getAllBlogs();
    expect(component.blogsData.length).toEqual(2);
  });



  it('Test formatCardData()', () => {
    let blogItem: BlogItem = 
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };
    component.formatCardData(blogItem);
    expect(component.formatCardData).toHaveBeenCalled;
  });
});
