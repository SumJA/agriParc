import { Component } from '@angular/core';
import { MaterielService } from 'app/services/materiels/materiel.service';
import { Materiels } from 'app/models/materiels';
import { Users } from 'app/models/users';
import { UsersService } from 'app/services/users/users.service';

@Component({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'typography.component.html'
})

export class TypographyComponent{
    public materiel: Materiels;
    public errorMessage: string = null;

    constructor(
        private _materielsService: MaterielService, 
        private _userService: UsersService){ 
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
