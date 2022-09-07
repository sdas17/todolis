import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoworkComponent } from './todowork.component';

describe('TodoworkComponent', () => {
  let component: TodoworkComponent;
  let fixture: ComponentFixture<TodoworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
