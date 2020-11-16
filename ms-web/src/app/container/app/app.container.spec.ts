import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContainer } from './app.container';

describe('AppContainer', () => {
  let component: AppContainer;
  let fixture: ComponentFixture<AppContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});