import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneoInfoComponent } from './torneo-info.component';

describe('TorneoInfoComponent', () => {
  let component: TorneoInfoComponent;
  let fixture: ComponentFixture<TorneoInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TorneoInfoComponent]
    });
    fixture = TestBed.createComponent(TorneoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
