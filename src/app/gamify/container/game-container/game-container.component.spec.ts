import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamifyContainerComponent } from './game-container.component';

describe('GameListContainerComponent', () => {
  let component: GamifyContainerComponent;
  let fixture: ComponentFixture<GamifyContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamifyContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamifyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
