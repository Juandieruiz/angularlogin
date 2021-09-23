import { TestBed } from '@angular/core/testing';

import { DetalleTareasService } from './detalle-tareas.service';

describe('DetalleTareasService', () => {
  let service: DetalleTareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleTareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
