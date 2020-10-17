import { Component } from '@angular/core';
import examples from 'libphonenumber-js/examples.mobile.json'
import { getExampleNumber, PhoneNumber } from 'libphonenumber-js';
import { SnsService } from 'src/app/services/sns.service';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss']
})
export class PhoneInputComponent {

  example: PhoneNumber;

  constructor(
    public snsService: SnsService,
  ) { 
    this.example = getExampleNumber('UA', examples);
  }
}
