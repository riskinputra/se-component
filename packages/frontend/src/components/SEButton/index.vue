<template>
  <button
    type="button"
    :class="classes"
    :style="style"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'SEButton',
  label: {
    type: String,
    required: true,
    default: 'Button'
  },
  color: {
    type: Boolean,
    default: 'default',
    validator: function (value) {
      return ['primary', 'secondary', 'accent', 'default'].indexOf(value) !== -1
    }
  },
  size: {
    type: String,
    default: 'medium',
    validator: function (value) {
      return ['small', 'medium', 'large'].indexOf(value) !== -1
    }
  }
}
</script>
