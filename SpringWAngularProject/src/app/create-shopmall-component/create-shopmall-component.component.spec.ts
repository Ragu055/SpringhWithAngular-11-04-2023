import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShopmallComponentComponent } from './create-shopmall-component.component';

describe('CreateShopmallComponentComponent', () => {
  let component: CreateShopmallComponentComponent;
  let fixture: ComponentFixture<CreateShopmallComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateShopmallComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateShopmallComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
