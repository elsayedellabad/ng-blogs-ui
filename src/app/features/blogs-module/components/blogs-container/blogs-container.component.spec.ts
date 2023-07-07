import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BlogsContainerComponent } from './blogs-container.component';

describe('BlogsContainerComponent', () => {
  let component: BlogsContainerComponent;
  let fixture: ComponentFixture<BlogsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogsContainerComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
