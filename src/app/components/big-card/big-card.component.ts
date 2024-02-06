import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [NgOptimizedImage, RouterLinkWithHref],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss',
})
export class BigCardComponent {
  @Input() id: number | null = 0;
  @Input() bigCardPhoto: string = '';
  @Input() bigCardPhotoAlt: string = '';
  @Input() bigCardTitle: string = '';
  @Input() bigCardContent: string = '';

  textTransform(original: string) {
    if (original.length > 335) {
      let txtModified = original.slice(0, 335);
      txtModified = txtModified.slice(0, txtModified.lastIndexOf(' ')) + '...';
      return txtModified;
    } else {
      return original;
    }
  }
}