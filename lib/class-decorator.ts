import {rootInjector, addProviders} from '../lib';

export function ClassProviders(providers?: any[]) {

  console.log(providers);

  addProviders(providers);

  return function (target: any) {
    // save a reference to the original constructor
    // console.log(target);
    // return target;

    let original = target;

    // a utility function to generate instances of a class
    function construct(constructor, args) {
      let c : any = function () {
        let i = rootInjector.resolveAndCreateChild([original]);
        return i.get(original);
      };
      c.prototype = constructor.prototype;
      return new c();
    }

    // the new constructor behaviour
    let f : any = function (...args) {
      console.log('New: ' + original.name);
      /*
       * Args does not contain injected
       */
      return construct(original, args);
    };

    f.prototype = original.prototype;
    return f;
  };
}
