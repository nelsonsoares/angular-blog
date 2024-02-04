import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent {
  @Input() smallCardPhoto: string = '';
  @Input() smallCardPhotoAlt: string = '';
  @Input() smallCardData: string = '';
  @Input() smallCardContent: string = '';
}
