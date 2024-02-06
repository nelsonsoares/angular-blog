import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [NgOptimizedImage, RouterLinkWithHref],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss',
})
export class SmallCardComponent {
  @Input() id: number | null = 0;
  @Input() smallCardPhoto: string = '';
  @Input() smallCardPhotoAlt: string = '';
  @Input() smallCardData: string = '';
  @Input() smallCardContent: string = '';

  textTransform(original: string){

    if(original.length > 162) {
      let txtModified = original.slice(0, 162);
      txtModified = txtModified.slice(0, txtModified.lastIndexOf(' ')) + '...';
      return txtModified;

    } else {
      return original;
    }
  }

}
