import {initRootInjector} from './lib';

export function bootstrap(App: any, providers: any[]): void {
  let injector = initRootInjector(providers);
  injector.resolveAndInstantiate(App);
}
