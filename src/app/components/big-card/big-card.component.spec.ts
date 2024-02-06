import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCardComponent } from './big-card.component';
import { RouterLinkWithHref } from '@angular/router';

describe('BigCardComponent', () => {
  let component: BigCardComponent;
  let fixture: ComponentFixture<BigCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigCardComponent, RouterLinkWithHref]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
