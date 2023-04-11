import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMallListComponent } from './shop-mall-list.component';

describe('ShopMallListComponent', () => {
  let component: ShopMallListComponent;
  let fixture: ComponentFixture<ShopMallListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopMallListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopMallListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
