require('reflect-metadata/Reflect');
import {bootstrap} from './bootstrap';
import {Di, DI_PROVIDERS} from './di/di';

bootstrap(Di, DI_PROVIDERS);
