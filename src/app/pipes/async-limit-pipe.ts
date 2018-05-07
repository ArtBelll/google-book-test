import {Observable} from "rxjs/Observable";
import {NgModule, Pipe, PipeTransform} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

@Pipe({name: 'asyncLimitTo'})
export class AsyncLimitPipe implements PipeTransform {
  transform<T>(value: Observable<Array<T>>, size: number): Observable<Array<T>> {
    return value.map(shelves => shelves.slice(0, size));
  }
}

@NgModule({
  declarations: [AsyncLimitPipe],
  exports: [AsyncLimitPipe]
})
export class AsyncLimitModule { };
