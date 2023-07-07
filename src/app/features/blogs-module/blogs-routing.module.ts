import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsContainerComponent } from './components/blogs-container/blogs-container.component';
import { BlogsComponent } from './components/blogs/blogs.component';
const routes: Routes = [
  {
    path: '',
    component: BlogsContainerComponent,
    children: [
      {
        path: 'list',
        component: BlogsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule {}
