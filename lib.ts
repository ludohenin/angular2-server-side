import {Injector} from 'angular2/angular2';

export {ClassProviders} from './lib/class-decorator';

export let rootInjector: Injector;

export const PROVIDERS:any[] = [];

export function addProviders(providers: any[]): void {
  PROVIDERS.push(providers);
}

export function initRootInjector(providers: any[]): Injector {
  rootInjector = Injector.resolveAndCreate(PROVIDERS.concat(providers));
  return rootInjector;
}
