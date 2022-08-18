import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <input
      id="email"
      type="email"
      [placeholder]="placeholder"
    >
  `,
  styleUrls: ['./input.css'],
})
export class InputComponent {

  @Input()
  placeholder: any = 'Continuar'

}
