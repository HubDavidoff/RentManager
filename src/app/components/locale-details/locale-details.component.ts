import { Component, OnInit } from '@angular/core';
import { ILocale } from 'src/app/models/locale';
import { HomePageService } from 'src/app/services/home-page.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-locale-details',
  templateUrl: './locale-details.component.html',
  styleUrls: ['./locale-details.component.css']
})
export class LocaleDetailsComponent implements OnInit {

  locale : ILocale;
  id : string;
  pageTitle : string = "Details of"
  errorMessage : string;

  constructor(private context : HomePageService, private route : ActivatedRoute, private router : Router) { 
    this.id = route.snapshot.paramMap.get("id");
  }

  onBack(){
    this.router.navigate(['/index']);
  }

  onEdit(){
    let url = '/edit-locale/'
    this.router.navigate([`/edit-locale/${this.id}`]);
  }

  ngOnInit() {
   this.getData();
  }

  delete(){
    this.router.navigate([`/delete-locale/${this.id}`]);
  }

  getData(){
    this.context.getLocale(this.id)
    .subscribe(data => {this.locale = data;
    if(this.locale.rentedBy!=null){
      this.locale.isFree = false;
    }else{
      this.locale.isFree = true;
    }
    },
      error=> this.errorMessage = <any>error);
  }

}
