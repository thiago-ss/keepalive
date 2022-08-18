import { Story, Meta } from '@storybook/angular/types-6-0';
import { SubtitleComponent } from './subtitle.component';

export default {
  title: 'Subtitle',
  component: SubtitleComponent,
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
