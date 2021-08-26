import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacienListComponent } from './pharmacien-list.component';

describe('PharmacienListComponent', () => {
  let component: PharmacienListComponent;
  let fixture: ComponentFixture<PharmacienListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacienListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacienListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
