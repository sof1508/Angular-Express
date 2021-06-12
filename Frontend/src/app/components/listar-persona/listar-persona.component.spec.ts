import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPersonaComponent } from './listar-persona.component';

describe('ListarPersonaComponent', () => {
  let component: ListarPersonaComponent;
  let fixture: ComponentFixture<ListarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
