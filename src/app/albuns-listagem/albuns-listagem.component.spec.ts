import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosListagem2Component } from './albuns-listagem.component';

describe('ContatosListagem2Component', () => {
  let component: ContatosListagem2Component;
  let fixture: ComponentFixture<ContatosListagem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatosListagem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosListagem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
