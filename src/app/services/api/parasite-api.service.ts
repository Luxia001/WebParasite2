import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParasiteModel } from 'src/app/models/parasite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParasiteApiService {

  constructor(private http: HttpClient) { }

  getParasiteAll(): Observable<ParasiteModel[]> {
    return this.http.get<ParasiteModel[]>("http://127.0.0.1:8080/parasite")
  }

  getParasite(id: string): Observable<ParasiteModel> {
    return this.http.get<ParasiteModel>(`http://127.0.0.1:8080/parasite/${id}`)
  }
}
