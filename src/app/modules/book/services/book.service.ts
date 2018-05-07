import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AbstractListResponse} from '../../../api/abstract-response';
import {Book} from '../domain/book';
import {map} from 'rxjs/operators';

@Injectable()
export class BookService {

  constructor(private httpClient: HttpClient) {
  }

  public getRecommendedBooks(): Observable<Book[]> {
    return this.httpClient.get<AbstractListResponse<Book>>('volumes/recommended')
      .pipe(
        map((response: AbstractListResponse<Book>) => response.items)
      );
  }
}
