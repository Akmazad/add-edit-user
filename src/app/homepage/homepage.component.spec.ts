import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { addMatchers, click } from '../../testing';

import { HomepageComponent } from './homepage.component';

import { By }     from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
class RouterStub {
  navigateByUrl(url: string) { return url; }
}
beforeEach ( addMatchers );
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageComponent ],
      schemas:      [NO_ERRORS_SCHEMA],
      providers: [{ provide: ActivatedRoute,      useClass: RouterStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
