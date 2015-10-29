import {Injector} from 'angular2/angular2';

export function bootstrap(App, PROVIDERS) {
  let injector = Injector.resolveAndCreate(PROVIDERS);
  // TODO: there might be a better way.
  injector.get(App);
}
