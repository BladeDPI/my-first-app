import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BaseTestComponent} from './base-test.component';

describe('BaseTestComponent', () => {
  let component: BaseTestComponent;
  let fixture: ComponentFixture<BaseTestComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });


  it(`should have as title 'app works!'`, () => {
    expect(component.title).toEqual('app works!');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  });
});
