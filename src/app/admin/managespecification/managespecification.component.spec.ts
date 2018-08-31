import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagespecificationComponent } from './managespecification.component';

describe('ManagespecificationComponent', () => {
  let component: ManagespecificationComponent;
  let fixture: ComponentFixture<ManagespecificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagespecificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagespecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
