import './styles/index.scss'

import SEButton from './components/SEButton/index.vue'

const components = {
  SEButton
}

const install = (Vue, opts = {}) => {
  Object.values(components).forEach((component) => {
    Vue.component(component.name, component)
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign({}, components, { install })
