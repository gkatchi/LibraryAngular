import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book/book.model';

@Injectable({
  providedIn: 'root'
})
export class InvokeLibraryService {

  constructor(private http: HttpClient) { }

  public getBooks(): Observable<Book[]> 
  {
    const url = 'http://localhost:8080/getBooks';
 
    return this.http.get<Book[]>(url);
  }

}
