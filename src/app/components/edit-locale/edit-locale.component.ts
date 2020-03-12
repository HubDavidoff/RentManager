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
    .subscribe(data => this.locale = data,
      error=> this.errorMessage = <any>error);
  }

  editLocale(){
    
  }


}
