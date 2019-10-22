import { Component } from '@angular/core';
import { MaterielService } from 'app/services/materiels/materiel.service';
import { Materiels } from 'app/models/materiels';
import { Users } from 'app/models/users';
import { UsersService } from 'app/services/users/users.service';
import { MatDatepickerModule } from '@angular/material';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'typography.component.html'
})

export class TypographyComponent {
    public materiels: Materiels[];
    public user: Users;
    public checkoutForm;
    public errorMessage: string = null;
    public successMessage: string = null;

    constructor(
        private _materielsService: MaterielService,
        private _userService: UsersService,
        private _formBuilder: FormBuilder
    ) {
        this._userService.updateUserInfo();
    }

    ngOnInit() {
        this.checkoutForm = this._formBuilder.group({
            materielId: new FormControl(null, [
                Validators.required
            ]),
            materielDateDebut: null,
            materielDateFin: null,
            materielLocalisation: null
        });
    }

    onSubmit(submitedData) {
        if (this.checkoutForm.valid) {
            this.errorMessage = null;
            this.successMessage =
                'Your new Statistic has been submitted ' + submitedData;
            this._materielsService.updateMateriel(submitedData.id ,submitedData);
            this.checkoutForm.reset();
        } else {
            this.successMessage = null;
            this.errorMessage =
                'Invalid Statistic name and/or Responsable Email address';
        }
    }

    public get materielsService(): MaterielService {
        return this._materielsService;
    }

    public get userService(): UsersService {
        return this._userService;
    }
}
