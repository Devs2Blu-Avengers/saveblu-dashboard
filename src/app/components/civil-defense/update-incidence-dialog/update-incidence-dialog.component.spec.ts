import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIncidenceDialogComponent } from './update-incidence-dialog.component';

describe('UpdateIncidenceDialogComponent', () => {
  let component: UpdateIncidenceDialogComponent;
  let fixture: ComponentFixture<UpdateIncidenceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateIncidenceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIncidenceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
