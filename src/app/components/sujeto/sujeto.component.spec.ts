import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SujetoComponent } from './sujeto.component';

describe('SujetoComponent', () => {
  let component: SujetoComponent;
  let fixture: ComponentFixture<SujetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SujetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SujetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
