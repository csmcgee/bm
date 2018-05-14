import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureformComponent } from './pictureform.component';

describe('PictureformComponent', () => {
  let component: PictureformComponent;
  let fixture: ComponentFixture<PictureformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
