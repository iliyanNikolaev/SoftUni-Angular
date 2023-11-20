import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const apiHost = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor( private httpClient: HttpClient) { }

  getThemes() {
    return this.httpClient.get(apiHost + '/themes');
  }

  getLatestPosts() {
    return this.httpClient.get(apiHost + '/posts?limit=5');
  }
}
