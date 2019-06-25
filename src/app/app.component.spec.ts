import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {WidgetComponent} from './widget/widget.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HelloWorldComponent,
        WidgetComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular app');
  });


});
