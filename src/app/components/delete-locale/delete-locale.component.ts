import { Component, OnInit } from '@angular/core';
import { HomePageService } from 'src/app/services/home-page.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ILocale } from 'src/app/models/locale';

@Component({
  selector: 'app-delete-locale',
  templateUrl: './delete-locale.component.html',
  styleUrls: ['./delete-locale.component.css']
})
export class DeleteLocaleComponent implements OnInit {

  id : string;
  locale : ILocale;
  errorMessage : string;

  constructor(private context : HomePageService, private route : ActivatedRoute, private router : Router) {
    this.id = route.snapshot.paramMap.get("id");
   }

  ngOnInit() {
    this.context.getLocale(this.id)
    .subscribe(data=>this.locale = data,
      error=>this.errorMessage = <any>error);
  }

  delete(){
    this.context.deleteLocale(this.locale.id)
    .subscribe(data=>console.log(data),
    error=>this.errorMessage = <any>error);
    this.router.navigate(['/index']);
  }

  cancel(){
    this.router.navigate(['/index']);
  }
}
