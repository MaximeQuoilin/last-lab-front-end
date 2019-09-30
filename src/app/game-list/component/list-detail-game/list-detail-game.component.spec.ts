import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetailGameComponent } from './list-detail-game.component';

describe('ListDetailGameComponent', () => {
  let component: ListDetailGameComponent;
  let fixture: ComponentFixture<ListDetailGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDetailGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetailGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
