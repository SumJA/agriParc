import { Injectable } from '@angular/core';
import { Users } from '../../models/users';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  private _user: Users;
  private _usersUrl: string = 'http://localhost:3000/users/';  // URL to web api

  constructor(private _http: HttpClient) {

  }

  /**
  * `GET` request to ask for all users from the server or for a specific user 
  * by providing an id as a parameter
  * 
  * @param id (optional) the user id
  * @return : a Promise
  */
  public askUserFromServer(id?: number): Promise<Users> {
    return this._http.get<Users>(this._usersUrl + id).toPromise();
  }

  /**
  * Update the statistic list
  * Do a `GET` request to ask for all statistics from the server
  */
  public updateUserInfo(): Users | any {
    const userFound = this.askUserFromServer(1);
    userFound.then(userInfo => {
        const userToImport = new Users;
        userToImport.nom = userInfo.nom;
        userToImport.prenom = userInfo.prenom;
        userToImport.pseudo = userInfo.pseudo;
        userToImport.email = userInfo.email;
        userToImport.password = userInfo.password;
        this._user = userToImport;
      return userInfo;
    }).catch(error => {
      return error.status;
    });
  }
}
