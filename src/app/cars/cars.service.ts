import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Observable} from "rxjs";
import {Car} from "./cars";

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }
}
