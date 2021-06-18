import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostsComponent } from './features/post/posts/posts.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './core/error/error.component';
import { HeroSectionComponent } from './shared/hero-section/hero-section.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SecondaryNavBarComponent } from './core/secondary-nav-bar/secondary-nav-bar.component';
import { PostCardComponent } from './features/post/post-card/post-card.component';
import { AddPostComponent } from './features/post/add-post/add-post.component';
import { PostCardCategoryComponent } from './features/post/post-card-category/post-card-category.component';
import { AboutComponent } from './shared/about/about.component';
import { AddPostBtnComponent } from './shared/add-post-btn/add-post-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ErrorComponent,
    HeroSectionComponent,
    FooterComponent,
    SecondaryNavBarComponent,
    PostCardComponent,
    AddPostComponent,
    PostCardCategoryComponent,
    AboutComponent,
    AddPostBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
