import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilDefenseComponent } from './civil-defense.component';

describe('CivilDefenseComponent', () => {
  let component: CivilDefenseComponent;
  let fixture: ComponentFixture<CivilDefenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilDefenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilDefenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
