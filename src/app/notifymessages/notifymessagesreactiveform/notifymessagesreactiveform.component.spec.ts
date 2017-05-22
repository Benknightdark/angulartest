import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifymessagesreactiveformComponent } from './notifymessagesreactiveform.component';

describe('NotifymessagesreactiveformComponent', () => {
  let component: NotifymessagesreactiveformComponent;
  let fixture: ComponentFixture<NotifymessagesreactiveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifymessagesreactiveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifymessagesreactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
