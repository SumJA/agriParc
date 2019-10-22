import { Injectable } from '@angular/core';
import { Users } from '../../models/users';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  private _user: Users;
  private _usersUrl: string = 'http://localhost:3000/users/';  // URL to web api

  constructor(private _http: HttpClient) {
    this.updateUserInfo();
  }

  /**
  * `GET` request to ask for all users from the server or for a specific user 
  * by providing an id as a parameter
  * 
  * @param id (optional) the user id
  * @return : a Promise
  */
  public askUserFromServer(): Promise<Users> {
    return this._http.get<Users>(this._usersUrl + 1).toPromise();
  }

  /**
  * Update the statistic list
  * Do a `GET` request to ask for all statistics from the server
  */
 public updateUserInfo(): Users | any {
  const userFound = this.askUserFromServer();
  userFound.then(userInfo => {
    const userToUpdate = new Users();
    userToUpdate.id = userInfo.id;
    userToUpdate.nom = userInfo.nom;
    userToUpdate.prenom = userInfo.prenom;
    userToUpdate.pseudo = userInfo.pseudo;
    userToUpdate.password = userInfo.password;
    userToUpdate.email = userInfo.email;
    userToUpdate.gaec_id = userInfo.gaec_id;
    this._user = userToUpdate;
    return this._user;
  }).catch(error => {
    return error.status;
  });
}

  public get user(): Users {
    return this._user;
  }

  public set user(user : Users) {
    this._user = user;
  }
}
