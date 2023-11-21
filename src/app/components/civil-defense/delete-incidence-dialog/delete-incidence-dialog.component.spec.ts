import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteIncidenceDialogComponent } from './delete-incidence-dialog.component';

describe('DeleteIncidenceDialogComponent', () => {
  let component: DeleteIncidenceDialogComponent;
  let fixture: ComponentFixture<DeleteIncidenceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteIncidenceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteIncidenceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
