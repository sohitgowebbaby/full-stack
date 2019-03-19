import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import {Role} from "../model/role.model";
import {Resource} from "../model/resource.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3000/accessControl/v1/';

  login(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8080/' + 'token/generate-token', loginPayload);
  }

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+'users');
  }

  getRoles() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+'role');
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl+'users', user);
  }

  createRole(role: Role): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl+'role', role);
  }

  createResource(resource: Resource): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl+'resource', resource);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
