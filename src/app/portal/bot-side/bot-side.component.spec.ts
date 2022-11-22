import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BotSideComponent } from './bot-side.component';

describe('BotSideComponent', () => {
  let component: BotSideComponent;
  let fixture: ComponentFixture<BotSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatToolbarModule],
      declarations: [BotSideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BotSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
