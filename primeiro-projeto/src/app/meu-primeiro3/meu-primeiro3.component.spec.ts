import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiro3Component } from './meu-primeiro3.component';

describe('MeuPrimeiro3Component', () => {
  let component: MeuPrimeiro3Component;
  let fixture: ComponentFixture<MeuPrimeiro3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuPrimeiro3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPrimeiro3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
