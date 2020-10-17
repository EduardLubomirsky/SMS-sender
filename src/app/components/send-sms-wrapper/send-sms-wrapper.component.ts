import { Component } from '@angular/core';
import { take, tap, catchError } from 'rxjs/operators'
import { NotifierService } from 'angular-notifier';

import { SnsService } from 'src/app/services/sns.service';
import { SendSmsRequestBody, SendSmsRequestResponse } from 'src/app/models/sns.interface';
import { of } from 'rxjs';

@Component({
  selector: 'app-send-sms-wrapper',
  templateUrl: './send-sms-wrapper.component.html',
  styleUrls: ['./send-sms-wrapper.component.scss']
})
export class SendSmsWrapperComponent {

  constructor(
    private snsService: SnsService,
    private readonly notifier: NotifierService,
  ) { }

  sendMessage(): void {
    if (!this.snsService.message || !this.snsService.phone) {
      return;
    }

    const requestBody: SendSmsRequestBody = {
      message: this.snsService.message,
      phoneNumber: this.snsService.phone,
    }

    this.snsService.sendSmsMessage(requestBody).pipe(
      take(1),
      tap(({ messageId }: SendSmsRequestResponse) => {
        this.notifier.notify('success', `Message successfully sended with id: ${ messageId }`);
        this.snsService.clearForm();
      }),
      catchError((err) => {
        this.notifier.notify('error', 'Sorry but something went wrong!');
        return of(err);
      })
    ).subscribe();
  }

}
