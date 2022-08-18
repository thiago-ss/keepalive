import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button type="submit">{{ value }}</button>
  `,
  styleUrls: ['./button.css']
})
export class ButtonComponent {

  @Input()
  value: any = 'Continuar'

}
