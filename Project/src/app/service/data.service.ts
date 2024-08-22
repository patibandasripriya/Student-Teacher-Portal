// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/students`);
  }

  getTeachers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/teachers`);
  }

  addRecord(record: any, role: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${role}s`, record);
  }

  deleteRecord(id: number, role: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${role}s/${id}`);
  }
}