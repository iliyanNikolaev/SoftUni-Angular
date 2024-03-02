import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// WHAT IS MONKEY PATCHING?

// const originalConsoleLog = console.log;

// console.log = (...args) => {

//   originalConsoleLog(...args);
//   console.warn('this is monkey patching');
// }

// console.log('monkey patching demo');