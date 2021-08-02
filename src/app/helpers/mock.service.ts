import { Injectable } from '@angular/core';
import { Gender, InvitType } from './models/mock.model';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  private genders: Gender[] = [
    {
      text: 'Erkek',
      value: 0,
    },
    {
      text: 'Kadın',
      value: 1,
    },
  ];
  private invitTypes: Gender[] = [
    {
      text: 'Ziyaretçi',
      value: 0,
    },
    {
      text: 'Öğrenci',
      value: 1,
    },
    {
      text: 'Medya',
      value: 2,
    },
    {
      text: 'Katılımcı',
      value: 3,
    },
  ];
  constructor() {}
  getGenders(): Gender[] {
    return this.genders;
  }
  getInvitTypes(): InvitType[] {
    return this.invitTypes;
  }
}
