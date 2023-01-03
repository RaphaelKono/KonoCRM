import { TestBed } from '@angular/core/testing';
import { Firestore } from '@angular/fire/firestore';

import { UserFormService } from './user-form.service';

describe('UserFormService', () => {
  let service: UserFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ Firestore]
    });
    service = TestBed.inject(UserFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
