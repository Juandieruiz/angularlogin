import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailListPageComponent } from './detail-list-page.component';

describe('DetailListPageComponent', () => {
  let component: DetailListPageComponent;
  let fixture: ComponentFixture<DetailListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
