import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }
  model: any = {};
  ngOnInit(){};
  onSubmit() {
    this.apiService.createRole(this.model)
      .subscribe( data => {alert(JSON.stringify(data));
      });
  }
}

