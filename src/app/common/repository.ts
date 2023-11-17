import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

export class Repository<T = any> {
  private readonly apiUrl = environment.apiUrl;
  private readonly http: HttpClient = inject(HttpClient);
  constructor(protected path: string) {}

  getAll(params?: HttpParams) {
    const route = this.getFullRoute();
    return this.http.get<T[]>(route, { params });
  }

  private getFullRoute(path?: string) {
    return `${this.apiUrl}${this.path}`;
  }
}
