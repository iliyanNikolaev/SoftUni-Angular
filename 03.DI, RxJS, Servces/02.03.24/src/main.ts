import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Observable } from 'rxjs';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// WHAT IS MONKEY PATCHING?

// const originalConsoleLog = console.log;

// console.log = (...args) => {

//   originalConsoleLog(...args);
//   console.warn('this is monkey patching');
// }

// console.log('monkey patching demo');


// OBSERVERS

const interval = (ms: number) => {
  const o = new Observable<string>((observer) => {
    let counter = 0;
    const timer = setInterval(() => {
      observer.next(`from observer: ${counter}`);
      counter++;
    }, ms);

    return () => {
      clearInterval(timer);
    }
  });

  return o;
}

interval(2000).subscribe(data => {
  console.log(data);
})
