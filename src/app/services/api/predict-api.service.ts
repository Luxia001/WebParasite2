import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PredictResultModel } from 'src/app/models/result_model';

@Injectable({
  providedIn: 'root'
})
export class PredictApiService {

  constructor(private http: HttpClient) { }

  predict(fd : FormData): Observable<PredictResultModel>  {
    return this.http.post<PredictResultModel>(`http://127.0.0.1:8080/predict`, fd)

  }
}
