import {Observable} from 'rxjs/Observable';
import {NgModule, Pipe, PipeTransform} from '@angular/core';
import {map} from 'rxjs/operators';


@Pipe({name: 'asyncLimitTo'})
export class AsyncLimitPipe implements PipeTransform {
  transform<T>(value: Observable<Array<T>>, size: number): Observable<Array<T>> {
    return value.pipe(
      map(shelves => shelves.slice(0, size))
    );
  }
}

@NgModule({
  declarations: [AsyncLimitPipe],
  exports: [AsyncLimitPipe]
})
export class AsyncLimitModule { }
