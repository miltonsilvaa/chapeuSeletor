import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageGrifinoriaPage } from './page-grifinoria.page';

describe('PageGrifinoriaPage', () => {
  let component: PageGrifinoriaPage;
  let fixture: ComponentFixture<PageGrifinoriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGrifinoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
