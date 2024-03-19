import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInfoHomeComponent } from './player-info-home.component';

describe('PlayerInfoHomeComponent', () => {
  let component: PlayerInfoHomeComponent;
  let fixture: ComponentFixture<PlayerInfoHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerInfoHomeComponent]
    });
    fixture = TestBed.createComponent(PlayerInfoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
