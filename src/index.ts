// Because were using typescript class decorators we need to import thr 'reflect-metadata' shim.
import 'reflect-metadata'

// Pollyfils Zones used by angular2
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ApplicationModule } from './Application/Application.module';

//bootstrap the app here.
platformBrowserDynamic().bootstrapModule(ApplicationModule);
