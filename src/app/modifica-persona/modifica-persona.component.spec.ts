import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaPersonaComponent } from './modifica-persona.component';

describe('ModificaPersonaComponent', () => {
  let component: ModificaPersonaComponent;
  let fixture: ComponentFixture<ModificaPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
