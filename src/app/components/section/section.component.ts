import { Component, Input } from '@angular/core';
import { Resource } from '../../model/resource.model';
import { Website } from '../../model/website.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
})
export class SectionComponent {
  @Input() header: string = '';
  @Input() resources: Website[] = [];

  openLink(url: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
