import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolisComponent } from './todolis.component';

describe('TodolisComponent', () => {
  let component: TodolisComponent;
  let fixture: ComponentFixture<TodolisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
