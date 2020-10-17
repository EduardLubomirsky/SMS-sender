import { Component } from '@angular/core';
import { take, tap } from 'rxjs/operators'
import { SnsService } from 'src/app/services/sns.service';
import { SendSmsRequestBody, SendSmsRequestResponse } from 'src/app/models/sns.interface';

@Component({
  selector: 'app-send-sms-wrapper',
  templateUrl: './send-sms-wrapper.component.html',
  styleUrls: ['./send-sms-wrapper.component.scss']
})
export class SendSmsWrapperComponent {

  constructor(
    private snsService: SnsService,
  ) { }

  sendMessage() {
    const requestBody: SendSmsRequestBody = {
      message: this.snsService.message,
      phoneNumber: this.snsService.phone,
    }
    debugger;

    this.snsService.sendSmsMessage(requestBody).pipe(
      take(1),
      tap((res: SendSmsRequestResponse) => {
        console.log(res)
      })
    ).subscribe();
  }

}
