import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Model3DesignComponent } from './model-3-design.component';

describe('Model3DesignComponent', () => {
  let component: Model3DesignComponent;
  let fixture: ComponentFixture<Model3DesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Model3DesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Model3DesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
