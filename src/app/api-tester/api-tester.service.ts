import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { auth } from './api-constent';

@Injectable({
    providedIn: 'root'
})

export class apiTesterService {


    constructor(private http: HttpClient) { }

    getApi(url: string) {
        return this.http.get(url);
    }
    postApi(url: string, body: any) {
        return this.http.post(url, body);
    }
}