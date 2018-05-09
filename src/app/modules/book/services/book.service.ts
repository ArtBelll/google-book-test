import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AbstractListResponse} from '../../../api/abstract-list-response';
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

  public getBooksByShelfAndMax(shelfId: number, maxResults: number): Observable<Book[]> {
    return this.httpClient.get<AbstractListResponse<Book>>(`mylibrary/bookshelves/${shelfId}/volumes`,
      {
        params: {
          maxResults: maxResults.toString()
        }
      })
      .pipe(
        map((response: AbstractListResponse<Book>) => response.items)
      );
  }

  public getBooksByShelf(shelfId: number): Observable<Book[]> {
    return this.httpClient.get<AbstractListResponse<Book>>(`mylibrary/bookshelves/${shelfId}/volumes`)
      .pipe(
        map((response: AbstractListResponse<Book>) => response.items)
      );
  }
}
