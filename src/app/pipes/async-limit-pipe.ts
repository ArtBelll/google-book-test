import {Observable} from "rxjs/Observable";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'asyncLimitTo'})
export class AsyncLimitPipe implements PipeTransform {
  transform<T>(value: Observable<Array<T>>, size: number): Observable<Array<T>> {
    return value.map(shelves => shelves.slice(0, size));
  }
}
