import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../model/user.model";
import {Role} from "../model/role.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {

  //user: User;
  model: any = {};
  roles: Role[];
 
  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let userId = window.localStorage.getItem("userRoleId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    
    this.apiService.getRoles()
      .subscribe( data => {
         this.roles = data.result;
         console.log(this.roles);
      });
      
  }

  onSubmit() {
    // this.apiService.updateUser(this.editForm.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       if(data.status === 200) {
    //         alert('User updated successfully.');
    //         this.router.navigate(['list-user']);
    //       }else {
    //         alert(data.message);
    //       }
    //     },
    //     error => {
    //       alert(error);
    //     });
  }

}

