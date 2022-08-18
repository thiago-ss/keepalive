import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle',
  template: `
    <p>{{ text1 }} <br> {{ text2 }}</p>
  `,
  styleUrls: ['./subtitle.css'],
})
export class SubtitleComponent {
  @Input()
  text1: any = 'Para continuar navegando de forma '
  text2: any = 'segura, efetue o login na rede.'
}
