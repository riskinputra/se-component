import SEButton from './index.vue'

export default {
  title: 'Components/Button',
  component: SEButton,
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary', 'accent', 'normal', 'dark'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEButton },
  template: '<SEButton @onClick="onClick" v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  label: 'Button'
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  label: 'Button'
}

export const Accent = Template.bind({})
Accent.args = {
  color: 'accent',
  label: 'Button'
}

export const Dark = Template.bind({})
Dark.args = {
  color: 'dark',
  label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button'
}
