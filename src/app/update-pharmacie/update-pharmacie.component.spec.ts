import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePharmacieComponent } from './update-pharmacie.component';

describe('UpdatePharmacieComponent', () => {
  let component: UpdatePharmacieComponent;
  let fixture: ComponentFixture<UpdatePharmacieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePharmacieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
