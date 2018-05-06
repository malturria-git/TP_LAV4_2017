import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoTipeoComponent } from './juego-tipeo.component';

describe('JuegoTipeoComponent', () => {
  let component: JuegoTipeoComponent;
  let fixture: ComponentFixture<JuegoTipeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoTipeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoTipeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
