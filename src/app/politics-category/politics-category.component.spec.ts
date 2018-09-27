import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticsCategoryComponent } from './politics-category.component';

describe('PoliticsCategoryComponent', () => {
  let component: PoliticsCategoryComponent;
  let fixture: ComponentFixture<PoliticsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
