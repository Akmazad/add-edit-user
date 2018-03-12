import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MatIconModule, MatToolbarModule, MatMenuModule } from '@angular/material';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { NO_ERRORS_SCHEMA }          from '@angular/core';
import { Component }                 from '@angular/core';

import { AppComponent } from './app.component';
import { Router, RouterOutlet } from "@angular/router";
import { RouterLinkStubDirective }   from '../testing';
import { RouterOutletStubComponent } from '../testing';

import {
  RouterTestingModule
} from '@angular/router/testing';

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

import { NavComponent }           from './nav/nav.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavComponent,
        RouterLinkStubDirective, RouterOutletStubComponent
      ],
      imports: [MatIconModule, MatToolbarModule, MatMenuModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Md Kamrul Islam');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Md Kamrul Islam');
  }));
});
