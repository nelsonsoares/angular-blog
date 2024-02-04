import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss',
})
export class BigCardComponent {
  @Input() bigCardPhoto: string = '';
  @Input() bigCardPhotoAlt: string = '';
  @Input() bigCardTitle: string = '';
  @Input() bigCardContent: string = '';
}