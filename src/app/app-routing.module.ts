import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './core';
import { HomeComponent } from './features/home-component/home.component';

const appRoutes: Routes = [
  {
    path: '',
    canActivate: [],
    component: HomeComponent
  },
  {
    path: 'home',
    canActivate: [],
    component: HomeComponent
  },
  {
    path: 'blogs',
    canActivate: [],
    loadChildren: () =>
      import('./features/blogs-module/blogs.module').then(
        (m) => m.BlogsModule
      ),
  },
  {
    path: 'users',
    canActivate: [],
    loadChildren: () =>
      import('./features/users-module/users.module').then((m) => m.UsersModule),
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
