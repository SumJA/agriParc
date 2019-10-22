import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UsersService } from '../users/users.service';

import { Materiels } from '../../models/materiels';
import { Users } from 'app/models/users';

@Injectable()
export class MaterielService {
  private _materiel: Materiels[];
  private _userId: number;
  private _materielsUrl: string = 'http://localhost:3000/materiels/';  // URL to web api

  constructor(
    private _http: HttpClient,
    private _userService: UsersService) {
    this.askUserMaterielsFromServer();
  }

  /**
  * `GET` request to ask for curent user materials
  * 
  * @return : a Promise
  */
  public askUserMaterielsFromServer() {
    this._getuserId()
      .then(id => {
        return this.requestUserMaterialFromServer(id);
      }).then(materiels => {
        this._materiel = materiels;
      }).catch(err => console.error(err));
  }

  public requestUserMaterialFromServer(id): Promise<Materiels[]> {
    return this._http.get<Materiels[]>(
      this._materielsUrl + id).toPromise();
  }

  public updateMateriel(id, data): Promise<Materiels[]> {
    return this._http.put<Materiels[]>(
      this._materielsUrl + id, data).toPromise();
  }

  private _getuserId(): Promise<number | any> {
    return this._userService.askUserFromServer()
      .then(res => {
        this._userId = res.id;
        return res.id;
      }).catch(err => err);
  }

  public get materiel(): Materiels[] {
    return this._materiel;
  }

  public set materiel(value: Materiels[]) {
    this._materiel = value;
  }
}
