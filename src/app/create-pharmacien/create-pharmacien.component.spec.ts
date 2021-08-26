import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePharmacienComponent } from './create-pharmacien.component';

describe('CreatePharmacienComponent', () => {
  let component: CreatePharmacienComponent;
  let fixture: ComponentFixture<CreatePharmacienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePharmacienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePharmacienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
