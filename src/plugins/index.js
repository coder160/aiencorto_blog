import vuetify from './vuetify.js'
import router from '../router'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
}
