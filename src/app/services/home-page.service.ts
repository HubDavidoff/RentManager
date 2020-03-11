import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor() { }

  hardCoded = [{
    id : '01',
    name : 'First Locale',
    location : 'Skopje',
    fromDate : '',
    toDate : '',
    rentedBy : '',
    isFree : true
  },
  {
    id : '02',
    name : 'Second Locale',
    location : 'Gostivar',
    fromDate : '02-10-19',
    toDate : '03-04-20',
    rentedBy : 'Me',
    isFree : false
  }];
}
