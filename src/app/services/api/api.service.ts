import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  async post(endPoint: string, body: any) {
    return await this.http
      .post(environment.API_SERVER + endPoint, body)
      .toPromise();
  }
}
