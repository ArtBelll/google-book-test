import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ShelfService {

  constructor(private httpClient: HttpClient) { }

  public getAllShelves(): Observable<any> {
    return this.httpClient.get('mylibrary/bookshelves');
  }
}
