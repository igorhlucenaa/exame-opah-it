/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmitEventService } from './emit-event.service';

describe('Service: EmitEvent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmitEventService]
    });
  });

  it('should ...', inject([EmitEventService], (service: EmitEventService) => {
    expect(service).toBeTruthy();
  }));
});
