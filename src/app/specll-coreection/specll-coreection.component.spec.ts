import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecllCoreectionComponent } from './specll-coreection.component';

describe('SpecllCoreectionComponent', () => {
  let component: SpecllCoreectionComponent;
  let fixture: ComponentFixture<SpecllCoreectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecllCoreectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecllCoreectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
