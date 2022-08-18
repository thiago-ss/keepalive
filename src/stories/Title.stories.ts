import { Story, Meta } from '@storybook/angular/types-6-0';
import { TitleComponent } from './title.component';

export default {
  title: 'Title',
  component: TitleComponent,
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
