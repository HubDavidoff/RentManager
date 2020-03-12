import { Component, OnInit } from '@angular/core';
import { AvailableSignComponent } from '../shared/available-sign.component';
import { HomePageService } from 'src/app/services/home-page.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ILocale } from 'src/app/models/locale';

@Component({
  selector: 'app-edit-locale',
  templateUrl: './edit-locale.component.html',
  styleUrls: ['./edit-locale.component.css']
})
export class EditLocaleComponent implements OnInit {

  locale : ILocale
  pageTitle : string = "Edit Locale";
  errorMessage: string;
  id : string;
  _name : string;
  _location : string;
  _fromDate : string;
  _toDate : string;
  _rentedBy : string;
  available : boolean;

  constructor(private context : HomePageService, private router: Router, private route : ActivatedRoute) {
    this.id = route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.getData();
  }

  cancel(){
    this.router.navigate(['/index']);
  }

  getData(){
    this.context.getLocale(this.id)
    .subscribe(data => {this.locale = data;
    if(this.locale.rentedBy){
      this.locale.isFree = false;}
    else {this.locale.isFree = true;
    }},
      error=> this.errorMessage = <any>error);
  }

  //setters:
  set Name(value: string){
    this._name = value;
  }
  set location(value: string){
    this._location = value;
  }
  set fromDate(value: string){
    this._fromDate = value;
  }
  set toDate(value: string){
    this._toDate = value;
  }
  set rentedBy(value: string){
    this._rentedBy = value;
  }

  editLocale(){
    this.locale.name = this._name;
    this.locale.location = this._location;
    this.locale.fromDate = this._fromDate;
    this.locale.toDate = this._toDate;
    this.locale.rentedBy = this._rentedBy;
    if(this.rentedBy){
      this.locale.isFree = false;
    }
    this.context.editLocale(this.locale)
    .subscribe(data=>console.log(data),
    error=>this.errorMessage = <any>error);
    this.router.navigate(['/index']);
  }


}
