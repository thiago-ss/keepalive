import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <h1>{{ title }}</h1>
  `,
  styleUrls: ['./title.css'],
})
export class TitleComponent {
  @Input()
  title: any = 'Title'
}
