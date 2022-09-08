import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotoeditComponent } from './totoedit.component';

describe('TotoeditComponent', () => {
  let component: TotoeditComponent;
  let fixture: ComponentFixture<TotoeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotoeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
