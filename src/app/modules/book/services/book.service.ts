import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AbstractListResponse} from '../../../api/abstract-response';
import {Book} from '../domain/book';

@Injectable()
export class BookService {

  constructor(private httpClient: HttpClient) {
  }

  public getRecommendedBooks(): Observable<Book[]> {
    return this.httpClient.get<AbstractListResponse<Book>>('volumes/recommended')
      .map(response => response.items);
  }
}
