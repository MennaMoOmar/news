import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardCategoryComponent } from './post-card-category.component';

describe('PostCardCategoryComponent', () => {
  let component: PostCardCategoryComponent;
  let fixture: ComponentFixture<PostCardCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCardCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
