import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ILocale } from '../models/locale';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  url : string = 'http://localhost:3000/get-locales/' 

  constructor(private http : HttpClient) { }

  getLocales() : Observable<ILocale[]>{
    return this.http.get<ILocale[]>(this.url)
    .pipe(catchError(this.handleError));
  }

  getLocale(id : string) : Observable<ILocale>{
    return this.http.get<ILocale>(this.url + id)
    .pipe(catchError(this.handleError));
  }

  handleError(err : HttpErrorResponse){
    let errorData = err.message + ". Hueston, we have a problem"
    return Observable.throw(errorData);
  }

  hardCoded = [{
    id : '01',
    name : 'First Locale',
    location : 'Skopje',
    fromDate : '',
    toDate : '',
    rentedBy : '',
    isFree : true,
    img : ''
  },
  {
    id : '02',
    name : 'Second Locale',
    location : 'Gostivar',
    fromDate : '02-10-19',
    toDate : '03-04-20',
    rentedBy : 'Me',
    isFree : false,
    img : ''
  }];
}
