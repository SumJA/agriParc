import { Component, OnInit } from '@angular/core';
import { Materiels } from 'app/models/materiels';
import { MaterielService } from 'app/services/materiels/materiel.service';
import { UsersService } from 'app/services/users/users.service';

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent {
    public materiel: Materiels;
    public errorMessage: string = null;


    constructor(private _materielsService: MaterielService,
        private _userService: UsersService) {
            console.log(this.materielsService.materiel);
    }

    ngOnInit() {
    }

    public get materielsService(): MaterielService {
        return this._materielsService;
    }

    public get userService(): UsersService {
        return this._userService;
    }

}
