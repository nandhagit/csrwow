import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutvideoComponent } from './aboutvideo.component';

describe('AboutvideoComponent', () => {
  let component: AboutvideoComponent;
  let fixture: ComponentFixture<AboutvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
