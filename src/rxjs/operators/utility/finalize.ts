import { interval } from 'rxjs';
import { finalize, take } from 'rxjs/operators';

// emit value in sequence every 1 second
const source = interval(1000);
// output: 0,1,2,3,4,5....
const example = source.pipe(
  take(5), // take only the first 5 values
  finalize(() => console.log('Sequence complete')) // Execute when the observable completes
);
example.subscribe(
  val => console.log(val),
  err => console.log(err),
  () => console.log('Completed')
);
