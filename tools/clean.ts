import * as del from 'del';

del(['!node_modules',
     '**/*.js',
     '**/*.js.map'],
     () => console.log('done!'));
