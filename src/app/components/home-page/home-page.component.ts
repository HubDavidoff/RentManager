import { Component, OnInit } from '@angular/core';
import { ILocale } from 'src/app/models/locale';
import { HomePageService } from 'src/app/services/home-page.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  locales : ILocale[];
  errorMessage : string;

  constructor(private context : HomePageService, private router : Router) { }

  ngOnInit() {
    // this.locales = this.context.hardCoded;
    this.getData();
  }

  getData(){
    this.context.getLocales()
    .subscribe(data => this.locales = data,
      error => this.errorMessage = <any>error);
  }

  toDetails(locale : ILocale){
    let id = locale.id;
    this.router.navigate([`/locale-details/${id}`]);
  }

}
