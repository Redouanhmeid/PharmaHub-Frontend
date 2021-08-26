import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacienDetailsComponent } from './pharmacien-details.component';

describe('PharmacienDetailsComponent', () => {
  let component: PharmacienDetailsComponent;
  let fixture: ComponentFixture<PharmacienDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacienDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacienDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
