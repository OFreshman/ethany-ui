import type { App, Plugin } from 'vue'
import { each } from 'lodash-es'

type SFCWithInstall<T> = T & Plugin;

export function makeInstaller(components: Plugin[]) {
  const installer = (app: App) => each(components, c => app.use(c) )

  return installer as Plugin
}

export const withInstall = <T>(component: T) => {
  const componentWithInstall = component as SFCWithInstall<T>;
  componentWithInstall.install = (app: App) => {
    const name = (component as any).name;
    app.component(name, component as Plugin)
  }

  return componentWithInstall
}