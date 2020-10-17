import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PhoneInputComponent } from './components/phone-input/phone-input.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { SendSmsWrapperComponent } from './components/send-sms-wrapper/send-sms-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneInputComponent,
    TextAreaComponent,
    SendSmsWrapperComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
