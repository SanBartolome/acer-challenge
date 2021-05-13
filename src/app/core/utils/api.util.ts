import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

export class ApiOptions {
  params?: HttpParams;
  headers?: HttpHeaders;
  observe?: string;
  isAuthenticated? = true;
}

@Injectable({
  providedIn: 'root',
})
export class ApiUtil {
  private backendUrl: string;

  constructor(private http: HttpClient) {
    this.backendUrl = environment.backendUrl;
  }

  public get(
    path: string,
    options: ApiOptions = new ApiOptions()
  ): Observable<any> {
    options = options || {};
    return this.http.get(`${this.backendUrl}${path}`, {
      params: options.params,
      headers: options.headers,
      observe: (options.observe || 'body') as 'body',
    });
  }

  public post(
    path: string,
    body?: any,
    options: ApiOptions = new ApiOptions()
  ): Observable<any> {
    options = options || {};
    return this.http.post(`${this.backendUrl}${path}`, body, {
      params: options.params,
      headers: options.headers,
      observe: (options.observe || 'body') as 'body',
    });
  }

  public put(
    path: string,
    body?: any,
    options: ApiOptions = new ApiOptions()
  ): Observable<any> {
    options = options || {};
    return this.http.put(`${this.backendUrl}${path}`, body, {
      params: options.params,
      headers: options.headers,
      observe: (options.observe || 'body') as 'body',
    });
  }

  public patch(
    path: string,
    body?: any,
    options: ApiOptions = new ApiOptions()
  ): Observable<any> {
    options = options || {};
    return this.http.patch(`${this.backendUrl}${path}`, body, {
      params: options.params,
      headers: options.headers,
      observe: (options.observe || 'body') as 'body',
    });
  }

  public delete(
    path: string,
    options: ApiOptions = new ApiOptions()
  ): Observable<any> {
    options = options || {};
    return this.http.delete(`${this.backendUrl}${path}`, {
      params: options.params,
      headers: options.headers,
      observe: (options.observe || 'body') as 'body',
    });
  }
}
