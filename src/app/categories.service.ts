import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


export interface Category {
  id: number;
  title: string;
}
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categoriesURL = 'http://localhost:3000/categories';

  categories$ = this.http.get<Category[]>(this.categoriesURL)
    .pipe(
      tap(data => console.log('categories: ', data))
    );


  constructor(private http: HttpClient) { }
}
