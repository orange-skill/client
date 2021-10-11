import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApproveItemComponent } from './admin-approve-item.component';

describe('AdminApproveItemComponent', () => {
  let component: AdminApproveItemComponent;
  let fixture: ComponentFixture<AdminApproveItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminApproveItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApproveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
