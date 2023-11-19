// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

import { Observable, interval, map } from "rxjs";

// const o = new Observable<number>((observer) => {
//   let counter = 1;
//   setInterval(() => {
//     observer.next(counter);
//     counter++;
//   }, 10000);
// });

// interval(3000).subscribe(console.log)

const stream$ = interval(3000).pipe(
  map(x => x + 1)
)

const sub = stream$.subscribe(console.log)

setTimeout(() => {
  sub.unsubscribe();
}, 10000)