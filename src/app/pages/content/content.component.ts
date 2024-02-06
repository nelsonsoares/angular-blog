import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkWithHref } from '@angular/router';
import { dataFake } from '../../data/dataFake';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLinkWithHref, NgOptimizedImage],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent implements OnInit {
  private id: number | null = 0;
  contentPhoto: string = '';
  contentPhotoAlt: string = '';
  contentTitle: string = '';
  contentSubTitle: string = '';
  contentTextContent: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      const numId = value.get('id');
      this.id = numId !== null ? Number(numId) : null;
    });

    this.setValueToComponent(this.id);
  }

  setValueToComponent(id: number | null) {
    const result = dataFake.filter((article) => article.id === id)[0];

    this.contentPhoto = result.photo;
    this.contentPhotoAlt = result.photoAlt;
    this.contentTitle = result.title;
    this.contentSubTitle = result.subtitle;
    this.contentTextContent = result.content;
  }
}
