import { Story, Meta } from '@storybook/angular/types-6-0';
import { InputComponent } from './input.component';

export default {
  title: 'Input',
  component: InputComponent,
  argTypes: {
    value: {
      control: 'text'
    }
  },
} as Meta;

const template: Story = args =>({
  props:{
    ...args
  }
})

export const Default = template.bind({})
