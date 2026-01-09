import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsArticlesPage } from './details-articles.page';

describe('DetailsArticlesPage', () => {
  let component: DetailsArticlesPage;
  let fixture: ComponentFixture<DetailsArticlesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsArticlesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
