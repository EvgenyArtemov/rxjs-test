import { fromEvent, interval, merge, NEVER } from 'rxjs';
import { setCount, startButton, pauseButton } from './utilities';

const interval$ = interval(1000);

const start$ = fromEvent(startButton, 'click');
let subscription;
start$.subscribe(() => {
  subscription = interval$.subscribe(val => {
    setCount(val+1);
  })
})
const pause$ = fromEvent(pauseButton, 'click');
pause$.subscribe(() => {
  subscription.unsubscribe();
})
