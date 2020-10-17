import { Component } from '@angular/core';
import { SnsService } from 'src/app/services/sns.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent {

  constructor(
    public snsService: SnsService,
  ) { }

}
