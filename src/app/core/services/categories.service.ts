import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class CategoriesService {
    constructor(private httpClient: HttpClient) { }

    categories$ = this.httpClient.get(`/api/categories`)
        .pipe(
            shareReplay()
        );
    
}