import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Invit } from '../models/invitation.model';

@Injectable({
  providedIn: 'root',
})
export class InvitationService {
  private url: string = environment.baseUrl + '/card/saveCard';
  constructor(private httpClient: HttpClient) {}

  pustInvit(content: Invit): Observable<Invit> {
    return this.httpClient.put<Invit>(this.url, content);
  }
}
