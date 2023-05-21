import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneosComponent } from './torneos.component';

describe('TorneosComponent', () => {
  let component: TorneosComponent;
  let fixture: ComponentFixture<TorneosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TorneosComponent]
    });
    fixture = TestBed.createComponent(TorneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
