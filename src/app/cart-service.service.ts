import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {
  CharactersResponse,
  PagedRequest,
} from './models/characters-response.model';
@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  constructor(private http: HttpClient) {}
  //retornar un observable de tipo CharactersResponse
  getAllCartItems(): Observable<CharactersResponse> {
    //rickandmortyapi.com/api/character
    return this.http.get<CharactersResponse>(
      'https://rickandmortyapi.com/api/character'
    );
  }

  getAllCartItemsPaged(
    request: PagedRequest
  ): Observable<CharactersResponse[]> {
    //get limit and offset

    return this.http
      .get<any>(
        `https://rickandmortyapi.com/api/character?page=${request.pages}`
      )
      .pipe()
      .pipe(map((response) => response.results));
  }

  getById(id: number) {}
}
