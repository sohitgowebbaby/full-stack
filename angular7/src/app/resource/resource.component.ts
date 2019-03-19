import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }
  model: any = {};
  ngOnInit(){};
  onSubmit() {
    this.apiService.createResource(this.model)
      .subscribe( data => {alert(JSON.stringify(data));
      });
  
   }
}

