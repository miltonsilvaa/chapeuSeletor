import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageSonserinaPage } from './page-sonserina.page';

describe('PageSonserinaPage', () => {
  let component: PageSonserinaPage;
  let fixture: ComponentFixture<PageSonserinaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSonserinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
