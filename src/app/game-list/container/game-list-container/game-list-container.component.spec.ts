import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListContainerComponent } from './game-list-container.component';

describe('GameListContainerComponent', () => {
  let component: GameListContainerComponent;
  let fixture: ComponentFixture<GameListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
