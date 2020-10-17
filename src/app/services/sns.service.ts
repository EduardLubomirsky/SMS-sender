import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SendSmsRequestResponse } from 'src/app/models/sns.interface';

@Injectable({
  providedIn: 'root'
})
export class SnsService {
  url = 'https://ahgzqudc4a.execute-api.us-east-2.amazonaws.com/default/notifier';
  message = '';
  phone = '';

  constructor(
    private http: HttpClient,
  ) {

  }

  clearForm(): void {
    this.message = '';
    this.phone = '';
  }

  sendSmsMessage(body): Observable<SendSmsRequestResponse> {
    return this.http.post<SendSmsRequestResponse>(this.url, body);
  }
}
