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

  editLocale(localeToEdit : ILocale) : Observable<string>{
    return this.http.post<string>(this.url + 'edit-locale/', {locale: localeToEdit})
    .pipe(catchError(this.handleError));
  }

  deleteLocale(id : string) : Observable<string>{
    return this.http.post<string>(this.url + 'delete-locale/', {id : id})
    .pipe(catchError(this.handleError));
  }

  handleError(err : HttpErrorResponse){
    let errorData = err.message + ". Hueston, we have a problem"
    return Observable.throw(errorData);
  }

}
