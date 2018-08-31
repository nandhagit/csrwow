import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageitemComponent } from './manageitem.component';

describe('ManageitemComponent', () => {
  let component: ManageitemComponent;
  let fixture: ComponentFixture<ManageitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
