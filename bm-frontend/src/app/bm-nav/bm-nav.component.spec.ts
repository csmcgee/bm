
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmNavComponent } from './bm-nav.component';

describe('BmNavComponent', () => {
  let component: BmNavComponent;
  let fixture: ComponentFixture<BmNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BmNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
