import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDTO} from "../interface/user-dto";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<UserDTO[]> {
    return this.httpClient.request<UserDTO[]>('GET', environment.apiUrl + '/user', {responseType: 'json'});
  }

  getUserByUuid(uuid: string): Observable<UserDTO> {
    return this.httpClient.request<UserDTO>('GET', environment.apiUrl + `/user/${uuid}`, {responseType: 'json'});
  }
}
