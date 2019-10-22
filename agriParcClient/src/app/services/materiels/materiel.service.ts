import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UsersService } from '../users/users.service';

import { Materiels } from '../../models/materiels';
import { Users } from 'app/models/users';

@Injectable()
export class MaterielService {
  private _matriel: Materiels;
  private _user: Users;
  private _usersUrl: string = 'http://localhost:3000/materiels/';  // URL to web api

  constructor(
    private _http: HttpClient,
    private _userService: UsersService) {
    this._user = _userService.user;
  }

  /**
    * `GET` request to ask for all users from the server or for a specific user 
    * by providing an id as a parameter
    * 
    * @param id (optional) the user id
    * @return : a Promise
    */
  public askUserMaterielsFromServer(): Promise<Materiels> {
    return this._http.get<Materiels>(this._usersUrl + this._user.id).toPromise();
  }

  
}
