import { ref } from 'vue'
import VInput from '../../components/common/VInput.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
const meta: Meta<typeof VInput> = {
  component: VInput,
  tags: ['autodocs'],
  argTypes: {

  }
}

const Template = (args: any) => ({
  components: { VInput },
  setup() {
    const inputValue = ref('')
    return {...args, inputValue }
  },
  template: `<VInput v-bind="args" v-model="inputValue" placeholder="Password" type="password" />`
});

export const Main = Template.bind({})

export default meta;