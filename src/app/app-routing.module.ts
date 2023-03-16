import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', loadChildren: () => import('./components/user-list/user-list.module').then(m => m.UserListModule)},
  {
    path: 'users/:id',
    loadChildren: () => import('./components/user-details/user-details.module').then(m => m.UserDetailsModule)
  },
  {
    path: 'users/:id/posts',
    loadChildren: () => import('./components/user-posts/user-posts.module').then(m => m.UserPostsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
