import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageCorvinalPage } from './page-corvinal.page';

describe('PageCorvinalPage', () => {
  let component: PageCorvinalPage;
  let fixture: ComponentFixture<PageCorvinalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCorvinalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
