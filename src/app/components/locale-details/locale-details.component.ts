import { Component, OnInit } from '@angular/core';
import { ILocale } from 'src/app/models/locale';
import { HomePageService } from 'src/app/services/home-page.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-locale-details',
  templateUrl: './locale-details.component.html',
  styleUrls: ['./locale-details.component.css']
})
export class LocaleDetailsComponent implements OnInit {

  locale : ILocale;
  id : string;
  pageTitle : string = "Details of"

  constructor(private context : HomePageService, private route : ActivatedRoute, private router : Router) { 
    this.id = route.snapshot.paramMap.get("id");
    this.context.hardCoded.forEach(element => {
      if(element.id==this.id){
        this.locale = element;
      }
    });
  }

  onBack(){
    this.router.navigate(['/index']);
  }

  ngOnInit() {
   
  }

}
