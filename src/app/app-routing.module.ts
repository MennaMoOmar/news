import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './core/error/error.component';
import { PostsComponent } from './features/post/posts/posts.component';
import { AddPostComponent } from './features/post/add-post/add-post.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'addpost', component: AddPostComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
