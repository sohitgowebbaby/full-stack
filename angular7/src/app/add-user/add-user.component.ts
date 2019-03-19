import {Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor(private router: Router, private apiService: ApiService) { 
  }
  model: any = {};
  ngOnInit(){};
  onSubmit() {
    this.apiService.createUser(this.model)
      .subscribe( data => {alert(JSON.stringify(data));
      });
  }
}
