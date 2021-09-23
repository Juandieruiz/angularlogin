import { TestBed } from '@angular/core/testing';

import { ListaTareasService } from './lista-tareas.service';

describe('ListaTareasService', () => {
  let service: ListaTareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaTareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
