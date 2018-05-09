import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Shelf} from '../domian/shelf';
import {AbstractListResponse} from '../../../api/abstract-list-response';
import {map} from 'rxjs/operators';

@Injectable()
export class ShelfService {

  constructor(private httpClient: HttpClient) {
  }

  public getAllShelves(): Observable<Shelf[]> {
    return this.httpClient.get<AbstractListResponse<Shelf>>('mylibrary/bookshelves')
      .pipe(
        map(response => response.items)
      );
  }

  public getShelves(id: number): Observable<Shelf> {
    return this.httpClient.get<Shelf>(`mylibrary/bookshelves/${id}`);
  }
}
