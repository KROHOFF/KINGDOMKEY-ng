import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorInfoComponent } from './jugador-info.component';

describe('JugadorInfoComponent', () => {
  let component: JugadorInfoComponent;
  let fixture: ComponentFixture<JugadorInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JugadorInfoComponent]
    });
    fixture = TestBed.createComponent(JugadorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
