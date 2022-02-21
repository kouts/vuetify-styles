import { Intersect } from 'vuetify/directives'
import { ThemeDefinition, createVuetify } from 'vuetify'
import { aliases } from 'vuetify/iconsets/fa'
import { fa } from 'vuetify/iconsets/fa'
import '@/styles/vuetify-overrides.scss'

const faAliases = Object.assign(aliases, {
  complete: 'fal fa-check',
  cancel: 'fal fa-times',
  close: 'fal fa-times',
  delete: 'fal  fa-times fa-fw', // delete (e.g. v-chip close)
  clear: 'fal fa-times fa-fw', // delete (e.g. v-chip close)
  success: 'far fa-check',
  info: 'far fa-info-circle',
  warning: 'fas fa-exclamation',
  error: 'fas fa-exclamation-triangle',
  prev: 'far fa-chevron-left',
  next: 'far fa-chevron-right',
  checkboxOn: 'fas fa-check-square',
  checkboxOff: 'fal fa-square',
  checkboxIndeterminate: 'fal fa-minus-square',
  delimiter: 'fas fa-circle', // for carousel
  sort: 'fa fa-sort-up',
  expand: 'far fa-chevron-down',
  menu: 'fal fa-bars',
  subgroup: 'fas fa-caret-down fa-fw',
  dropdown: 'fas fa-caret-down fa-fw',
  radioOn: 'far fa-dot-circle',
  radioOff: 'fal fa-circle',
  edit: 'far fa-edit',
  ratingEmpty: 'far fa-star',
  ratingFull: 'fas fa-star',
  ratingHalf: 'fas fa-star-half',
  loading: 'far fa-sync',
  first: 'fas fa-step-backward',
  last: 'fas fa-step-forward',
  unfold: 'fas fa-arrows-alt-v',
  file: 'far fa-paperclip',
  plus: 'far fa-plus',
  minus: 'far fa-minus',
})

const light: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#29335c',
    secondary: '#f5f5f5',
    background: '#f5f5f5',
    surface: '#ffffff',
    error: '#bc1637',
    warning: '#e5c302',
    info: '#0165a3',
    success: '#6fbf15',
    accent: '#3fb27f',
    'on-surface': '#212121',
    'primary-lighten-1': '#4E5983',
  },
  variables: {
    'high-emphasis-opacity': 1,
    'medium-emphasis-opacity': 1,
  },
}

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#d0d2d6',
    secondary: '#82868b',
    background: '#141a2f',
    surface: '#283046',
    error: '#bc1637',
    warning: '#e5c302',
    info: '#0165a3',
    success: '#6fbf15',
    accent: '#3fb27f',
  },
  variables: {
    'high-emphasis-opacity': 1,
    'medium-emphasis-opacity': 1,
  },
}

export const vuetify = createVuetify({
  directives: { Intersect },
  icons: {
    defaultSet: 'fa',
    aliases: faAliases,
    sets: {
      fa,
    },
  },
  defaults: {
    global: {
      ripple: false,
      elevation: 0,
    },
    VTextField: {
      variant: 'outlined',
      density: 'compact',
    },
    VCheckbox: {
      density: 'compact',
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light,
      dark,
    },
  },
})
