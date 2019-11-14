import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CategoriesService {
    constructor(private httpClient: HttpClient) { }

    getCategories(): Observable<any> {
        return this.httpClient.get(`/api/categories`);
    }
    
}